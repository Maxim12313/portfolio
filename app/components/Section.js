import Title from "./Title"
export default function Section({ number, description, content }) {
  return (
    <div className="flex flex-row w-1/2 mb-52">
      <div className="flex flex-col items-start w-full">
        <Title number={number} description={description} />
        { content }
      </div>
    </div>
  );
}