import Button from "./Button";

function About() {


  return (
    <div id="about" className="max-w-full py-20 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
      <div className="flex max-w-full justify-center items-center mb-20">
        <Button btnText={"About me"} />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full py-2 flex justify-center lg:w-[50%] ">
          <div className="relative flex [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
            <img
              src="src/logo/desk.jpg"
              alt="Sagar outdoor"
              className="rounded-xl md:w-[400px] md:max-h-[533.333px] border-5 border-[#F9FAFB] dark:border-[#111827] relative z-1"
            />
            <div className="absolute right-10 top-10 max-h-[533.333px] lg:min-h-[533.333px] lg:min-w-[400px] max-w-[400px] rounded-xl bg-[#E5E7EB] dark:bg-[#374151]"></div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-[#111827] dark:text-[#F9FAFB] ">
            Curious about me? Here you have it:
          </h3>

          <p className="text-[16px] leading-relaxed mb-8  text-[#4B5563] dark:text-[#D1D5DB]">
            I’m <strong>Bishnu Mukherjee</strong>, a final-year B.Tech student
            in Computer Science & Engineering at Dr. B.C. Roy Engineering
            College. I’m passionate about building responsive websites, solving
            real-world problems with code, and analyzing data to uncover
            insights. My journey includes developing front-end projects, working
            with modern frameworks, and gaining hands-on experience as a data
            analyst intern where I applied machine learning and created
            visualizations using Tableau. I thrive on continuous learning and
            love turning ideas into functional, impactful solutions.
          </p>

          <div className="space-y-4 text-[#4B5563] dark:text-gray-300">
            <h3 className="text-xl font-semibold text-[#111827] dark:text-white underline">
              Key Highlights:
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Education:</strong> B.Tech in Computer Science &
                Engineering, Dr. B.C. Roy Engineering College (2021–2025)
              </li>
              <li>
                <strong>Technical Skills:</strong> HTML, CSS, JavaScript, Java,
                Python, MySQL
              </li>
              <li>
                <strong>Frameworks & Tools:</strong> Tailwind CSS, Bootstrap,
                Figma, VS Code, IntelliJ, PyCharm
              </li>
              <li>
                <strong>Projects:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>Spotify Clone (HTML, CSS, JS)</li>
                  <li>Currency Converter (HTML, CSS, JS + API)</li>
                  <li>Website Clone from Figma (Tailwind CSS)</li>
                </ul>
              </li>
              <li>
                <strong>Internship:</strong> Data Analyst Intern at Webel
                Fujisoft Vara COE (June–July 2024)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
