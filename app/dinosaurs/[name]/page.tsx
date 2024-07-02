import { Dinosaur as DinosaurType } from "../../../types";
import data from "../../../data/dinosaurs.json";

export default function DinosaurDetail({
  params,
}: {
  params: { name: string };
}) {
  let dinosaur = data.find(
    (dino: DinosaurType) =>
      dino.name.toLowerCase().replace(/\s+/g, "-") === params.name
  );

  if (dinosaur === undefined) {
    return <div>Dinosaur not found</div>;
  }

  return (
    <div className="rounded-md p-6">
      <p>
        <strong>Name: </strong>
        {dinosaur?.name}
      </p>
      <p>
        <strong>Era: </strong>
        {dinosaur?.era}
      </p>
      <p>
        <strong>Weight: </strong>
        {dinosaur?.weight}
      </p>
      <p>
        <strong>Type: </strong>
        {dinosaur?.type}
      </p>
      <p>
        <strong>Description: </strong>
        {dinosaur?.description}
      </p>
    </div>
  );
}
