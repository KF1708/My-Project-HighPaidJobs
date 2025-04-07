export default function DateTimePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: string) => void;
}) {
  return (
    <input
      type="datetime-local"
      placeholder="Select date and time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-4 lg:w-[950px] md:w-[700px] xl:[1180px] border rounded-lg dark:bg-black bg-gray-100 shadow-sm"
    />
  );
}
