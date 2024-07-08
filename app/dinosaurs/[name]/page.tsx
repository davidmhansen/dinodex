import { Dinosaur as DinosaurType } from "../../../types";
import Image from "next/image";

// * fetch dinosaur data from own api endpoint
// ? Maybe rewrite the getData call to just get the requested dinosaur with the id and not all dinosaurs and filter them later
async function getData(): Promise<any> {
  const res = await fetch("http:localhost:3000/api/dinosaurs", {
    cache: "reload",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

export default async function DinosaurDetail({
  params,
}: {
  params: { name: string };
}) {
  // * get dinosaur data from DB
  const dinosaurData = await getData();

  // * check path for matching dinosaur
  let dinosaur = dinosaurData.find(
    (dino: DinosaurType) =>
      dino.name.toLowerCase().replace(/\s+/g, "-") === params.name
  );

  if (dinosaur === undefined) {
    return <div>Dinosaur not found</div>;
  }

  return (
    <div className="rounded-md p-6 border max-w-[450px]">
      <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-4">
        <Image src={dinosaur?.image} alt={dinosaur?.name} fill></Image>
      </div>
      <h1>
        <strong>Name: </strong>
        {dinosaur?.name}
      </h1>
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
