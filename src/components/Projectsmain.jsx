import Button from "./Button";
import Projects from "./Projects";



// add prom to pass the project components

function Projectsmain({projs}) {
  return (
    <div className="w-full py-20">
      <div className="mb-10">
        <div className="flex w-full justify-center items-center mb-4">
          <Button btnText={"Projects"} />
        </div>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-xl text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="space-y-7">
        {projs}
      </div>
      {/* <Projects
        x2={components}
        imag={"src/logo/spotify-clone.png"}
        proName={"Spotify Clone"}
        des={
          "Created a front-end Spotify clone using HTML, CSS, and JavaScript, replicatingthe layout and styling of the Spotify web player"
        }
      /> */}
    </div>
  );
}

export default Projectsmain;
