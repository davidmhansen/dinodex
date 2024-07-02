import { ChangeEvent } from "react";

interface TypeSelectProps {
  type: string;
  setType: (type: string) => void;
}

export default function TypeSelect({ type, setType }: TypeSelectProps) {
  return (
    <div>
      <select
        value={type}
        defaultValue=""
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setType(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="herbivore">Herbivore</option>
        <option value="carnivore">Carnivore</option>
      </select>
    </div>
  );
}
