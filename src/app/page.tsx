import Image from "next/image";
import data from "../../data.json";

export default function Home() {
  return (
    <div className="flex items-center">
      <Image
        alt="data.name"
        src={data.avatar}
        width={40}
        height={40}
      />
    </div>
  );
}
