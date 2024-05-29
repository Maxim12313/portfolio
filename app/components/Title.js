export default function Title({ number, description }) {
  return (
    <h2 className="mb-10 line w-full flex flex-row items-center">
      <div>
        <number className="text-2xl"> { number } </number> { description }
      </div>
    </h2>
  );
}