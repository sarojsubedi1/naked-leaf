import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";

export default function SelectQty() {
  return (
    <Select
      defaultValue="1"
      className="bg-green-50 dark:bg-green-800 border-green-200 dark:border-green-700"
    >
      <SelectTrigger className="w-24">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </SelectContent>
    </Select>
  );
}
