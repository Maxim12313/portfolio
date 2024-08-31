export default function Title({ number, description, name }) {
  return (
    <h2 className="mb-10 line w-full flex flex-row items-center">
      <a name={name}></a>
      <number className="text-2xl"> {number} </number> {description}
    </h2>
  );
}
