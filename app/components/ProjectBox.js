import Image from "next/image"

export default function ProjectBox({ name, description, image, tags, link }) {
  const tagItems = tags.map((x, i) => {
    return (
        <div
          className="py-[2px] px-1 bg-color5 rounded-lg m-1"
          key={i} 
        >
          <h4 className="text-sm">{ x }</h4>
        </div>
    );
  });

  return(
    <a 
      className="w-full flex flex-row space-x-4 
                 hover:backdrop-brightness-110 p-2 rounded-xl m-5 items-start"
      href={link}
    >
      <Image 
        src={image}
        height={0}
        width={0}
        alt="preview image"
        className="rounded-lg h-auto max-w-40"
      />      
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl text-lightest-slate">{ name }</h2>
        <p>{ description }</p>
        <div className="flex flex-row flex-wrap justify-start items-center">{ tagItems }</div>
      </div>
    </a>
  );
}