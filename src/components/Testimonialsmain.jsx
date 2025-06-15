import Button from "./Button";

function Testimonialsmain({pass}) {
  return (
    <div id="testimonials" className="py-20 max-w-full mx-auto ">
      <div className="mb-10">
        <div className="flex w-full justify-center items-center mb-4">
          <Button btnText={"Testimonials"} />
        </div>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-xl text-center">
          Nice things people have said about me:
        </p>
      </div>
      <div className="flex flex-wrap gap-[25px] items-center justify-center lg:justify-center lg:items-center w-full">
        {pass}
      </div>
    </div>
  );
}

export default Testimonialsmain;
