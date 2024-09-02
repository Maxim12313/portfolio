import Title from "./Title";
export default function Section({ number, description, content, name }) {
  return (
    <div className="widthManager flex flex-row  mb-40">
      <div className="flex flex-col items-start w-full">
        <Title number={number} description={description} name={name} />
        {content}
      </div>
    </div>
  );
}
