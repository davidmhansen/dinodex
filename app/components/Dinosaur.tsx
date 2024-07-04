import { Dinosaur as DinosaurType } from "../../types";

import Link from "next/link";
import Image from "next/image";

export default function Dinosaur({ dino }: { dino: DinosaurType }) {
  return (
    <Link href={`/dinosaurs/${dino.name.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className="p-6 border rounded-md min-w-80 max-w-96 h-full">
        <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-4">
          <Image src={dino.image} alt={dino.name} fill></Image>
        </div>
        <p>
          <strong>Name:</strong> {dino.name}
        </p>
        <p>
          <strong>Weight:</strong> {dino.weight}
        </p>
        <p>
          <strong>Era:</strong> {dino.era}
        </p>
        <p>
          <strong>Type:</strong> {dino.type}
        </p>
        {/* <p>
          <strong>Description:</strong> {dino.description}
        </p> */}
      </div>
    </Link>
  );
}
