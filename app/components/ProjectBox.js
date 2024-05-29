import Image from "next/image"

export default function ProjectBox({ name, description, image, tags }) {
  const tagItems = tags.map((x, i) => {
    return (
        <div
          className="text-sm p-1 backdrop-brightness-125 rounded-xl"
          key={i} 
        >
          <h4>{ x }</h4>
        </div>
    );
  });

  return(
    <div className="w-full flex flex-row space-x-4">
      <Image 
        src={image}
        height={100}
        width={300}
        alt="preview image"
        className="rounded-lg"
      />
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl text-lightest-slate">{ name }</h2>
        <p>{ description }</p>
        <div className="flex flex-row space-x-2 flex-wrap">{ tagItems }</div>
      </div>
    </div>
  );
}