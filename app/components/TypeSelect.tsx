import { ChangeEvent } from "react";

interface TypeSelectProps {
  options: Array<string>;
  type: string;
  setType: (type: string) => void;
}

export default function TypeSelect({
  type,
  setType,
  options,
}: TypeSelectProps) {
  return (
    <div>
      <select
        value={type}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setType(e.target.value);
        }}
      >
        {options.map((option) => (
          <option value={option.toLowerCase()}>{option}</option>
        ))}
      </select>
    </div>
  );
}
