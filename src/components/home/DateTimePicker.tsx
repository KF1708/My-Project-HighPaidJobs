export default function DateTimePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: string) => void;
}) {
  return (
    <div className="">
      <input
        type="datetime-local"
        placeholder="Select date and time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-4 w-full sm:w-[300px] md:w-[500px] lg:w-[700px] xl:w-[950px] border rounded-lg dark:bg-black bg-gray-100 shadow-sm"
      />
    </div>
  );
}
