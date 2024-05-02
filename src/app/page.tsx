import Image from "next/image";
import data from "../../data.json";

function LinkCard({ href, title, image }: { href: string, title: string, image?: string }){
  return (
    <a 
      href={href} 
      className="flex items-center p-1 w-full rounded-md 
      hover:shadow-xl hover:scale-105 transition-all 
      duration-300 bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          { image ? (
          <Image
            className="rounded"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
          ) : null }
        </div>
        <h2 className="flex items-center justify-center font-semibold w-full text-center 
        text-gray-600 -ml-10">{title}</h2>
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


