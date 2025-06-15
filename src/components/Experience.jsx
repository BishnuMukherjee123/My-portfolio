import Button from "./Button";
import Work from "./Work";

function Experience() {
  return (
    <div className="w-full py-20">
      <div className="mb-10">
        <div className="flex w-full justify-center items-center mb-4">
          <Button btnText={"Internship"} />
        </div>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-xl text-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <Work />
    </div>
  );
}

export default Experience;
