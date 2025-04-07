import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

interface ContactInfo {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apt?: string;
  country: string;
}

interface RequestBody {
  sourceId: string;
  amount: number;
  quantity: number;
  planId: string;
  contactInfo: ContactInfo;
}

export async function POST(request: Request) {
  try {
    const { sourceId, amount, quantity, planId, contactInfo }: RequestBody =
      await request.json();

    // Square API requires an access token
    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const locationId = process.env.SQUARE_LOCATION_ID;

    if (!accessToken || !locationId) {
      return NextResponse.json(
        { error: "Square credentials are not configured" },
        { status: 500 }
      );
    }

    // Convert amount to cents (Square requires amount in cents)
    const amountInCents = Math.round(amount * 100);

    // Format the address
    const formattedAddress = `${contactInfo.address}${
      contactInfo.apt ? ", " + contactInfo.apt : ""
    }`;

    // Get plan name based on planId
    const planNames: Record<string, string> = {
      starter: "Starter: Interview Assessment",
      essential: "Essential: Interview Assessment",
      premium: "Premium: Interview Assessment",
    };

    const planName = planNames[planId] || "Interview Assessment";

    // Create a payment using Square API
    const response = await fetch("https://connect.squareup.com/v2/payments", {
      method: "POST",
      headers: {
        "Square-Version": "2023-09-25",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idempotency_key: randomUUID(),
        source_id: sourceId,
        amount_money: {
          amount: amountInCents,
          currency: "USD",
        },
        location_id: locationId,
        buyer_email_address: contactInfo.email,
        billing_address: {
          first_name: contactInfo.firstName,
          last_name: contactInfo.lastName,
          address_line_1: contactInfo.address,
          address_line_2: contactInfo.apt || "",
          country: contactInfo.country,
        },
        shipping_address: {
          first_name: contactInfo.firstName,
          last_name: contactInfo.lastName,
          address_line_1: contactInfo.address,
          address_line_2: contactInfo.apt || "",
          country: contactInfo.country,
        },
        note: `TS4U IT Engineering Bootcamp - ${planName} (Qty: ${quantity})`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Square API error:", data);
      return NextResponse.json(
        { error: data.errors?.[0]?.detail || "Failed to process payment" },
        { status: response.status }
      );
    }

    // Store customer information and order details in your database here
    // This is where you would save the order information for future reference

    return NextResponse.json({
      success: true,
      paymentId: data.payment.id,
      orderId: data.payment.order_id,
    });
  } catch (error) {
    console.error("Error processing Square payment:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
