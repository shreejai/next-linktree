import Image from "next/image";
import data from "../../data.json";

function LinkCard({ href, title, image }: { href: string, title: string, image?: string }){
  return (
    <a 
      href={href} 
      className="flex items-center p-4 rounded-md w-full 
      hover:shadow-xl transition-all duration-300 border mb-3"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-auto justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt="data.name"
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map( (link) => (
        <LinkCard key={link.href} {...link}/>
      ))}
    </div>
  );
}


