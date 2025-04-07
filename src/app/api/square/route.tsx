import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

// This would typically come from your database
const ITEM_PRICE = 99.99;

export async function POST(request: Request) {
  try {
    const { quantity } = await request.json();

    // Calculate the total amount
    const amount = Math.round(ITEM_PRICE * quantity * 100);

    // Square API requires an access token
    const accessToken = process.env.SQUARE_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Square access token is not configured" },
        { status: 500 }
      );
    }

    // Create a payment link using Square API
    const response = await fetch(
      "https://connect.squareup.com/v2/online-checkout/payment-links",
      {
        method: "POST",
        headers: {
          "Square-Version": "2023-09-25",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idempotency_key: randomUUID(),
          quick_pay: {
            name: "TS4U IT Engineering Bootcamp - Essential Interview Assessment",
            price_money: {
              amount,
              currency: "USD",
            },
            location_id: process.env.SQUARE_LOCATION_ID,
          },
          checkout_options: {
            redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Square API error:", data);
      return NextResponse.json(
        { error: "Failed to create payment link" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      paymentLink: data.payment_link.url,
      orderId: data.payment_link.id,
    });
  } catch (error) {
    console.error("Error creating Square payment:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
