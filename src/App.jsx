import { useState } from "react";
import Probtn from "./components/Probtn";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projectsmain from "./components/Projectsmain";
import Projects from "./components/Projects";
import Testimonialsmain from "./components/Testimonialsmain";
import Footer from "./components/Footer";
import spotify from './logo/spotify-clone.png'
import currency from './logo/currency.png'
import figma from './logo/figma.png'
import deba from './logo/deba.jpg'
import sneha from './logo/sne.jpg'
import arnab from './logo/arnab.jpg'



function App() {
  const [color, setColor] = useState("dark");
  const [mainOver, overFun] = useState(null);
  const overFlow = (e) => {
    if (e == 0) {
      overFun("");
    } else {
      overFun("overflow-hidden");
    }
  };

  // const components = [
  //   <Probtn x1={"HTML"} />,
  //   <Probtn x1={"CSS"} />,
  //   <Probtn x1={"JavaScript"} />,
  // ];

  const projectData = {
    proLink: "https://spotify-one-theta-40.vercel.app/",
    proName: "Spotify Clone",
    imageLink: `${spotify}`,
    describe:
      "Created a front-end Spotify clone using HTML, CSS, and JavaScript, replicating the layout and styling of the Spotify web player.",
    describe2:"Developed a static Spotify clone with custom HTML/CSS UI and basic JavaScript functionality such as play/pause and song selection. \nDesigned a static clone of the Spotify web interface using HTML and CSS, replicating the visual structure and layout of the desktop player.",
    tooles: [
      <Probtn key="html" x1="HTML" />,
      <Probtn key="css" x1="CSS" />,
      <Probtn key="js" x1="JavaScript" />,
    ],
  };

  const projectData2 = {
    proLink: "https://currency-converter-phi-taupe.vercel.app/",
    proName: "Currency Converter",
    imageLink: `${currency}`,
    describe:
      " Built a basic currency converter using HTML, CSS, and JavaScript to perform real-time currency conversions between selected countries",
    describe2:"Developed a static currency converter that fetches real-time exchange rates using a public API and performs calculations based on user input. \nImplemented a currency conversion tool with JavaScript that handles user input, calculates exchange rates, and displays results dynamically.",
    tooles: [
      <Probtn key="html" x1="HTML" />,
      <Probtn key="css" x1="CSS" />,
      <Probtn key="js" x1="JavaScript" />,
    ],
  };

  const projectData3 = {
    proLink: "https://website-clone-from-figma.vercel.app/",
    proName: "Currency Converter",
    imageLink: `${figma}`,
    describe: "Fully responsive layout",
    describe2:"Clean and modern UI. \nMobile-friendly design \nTailwind CSS utility classes \n Using HTML, CSS-Tailwind",
    tooles: [
      <Probtn key="html" x1="HTML" />,
      <Probtn key="css" x1="CSS" />,
    ],
  };
  const num = [<Projects proDetail={projectData} />, <Projects proDetail={projectData2}/>, <Projects proDetail={projectData3}/>];

  const debaMsg =
    "Bishnu consistently demonstrated a high level of dedication and reliability. His work ethic is commendable, and he approaches his tasks with a strong sense of responsibility and attention to detail. Bishnu exemplifies professionalism, consistency, and a commendable work ethic.";
  const sneMsg =
    "Bishnu has consistently exemplified exceptional dedication and unwavering reliability in his work. His commendable work ethic, coupled with a keen sense of responsibility and meticulous attention to detail, truly sets him apart. Bishnu embodies the essence of professionalism, consistency, and integrity, making him a valued asset in any setting";
  const arnabMsg =
    "Bishnu Mukherjee has always showed an unparalleled level of affiliation and steadfastness. He takes on his work with an acute awareness of personal accountability and attention to detail, and the way he works is great. Bishnu is the epitome of expertise, credibility, and a dedication to his job.";

  const debaLink = "https://www.linkedin.com/in/debarun-das-4046a6201/";
  const snehLink = "https://www.linkedin.com/in/sneharta-roy-354497245/";
  const arnabLink =
    "https://www.instagram.com/arnab_080203?igsh=dXB3ZndsY251Y29m ";

  return (
    <div
      className={`w-full h-screen transition-all duration-300 ease-in-out animate-fade-in ${color} ${mainOver}`}
    >
      <Navbar val={color} fun1={setColor} fun2={overFlow} />
      {/* <Globe /> */}
      {/* Intro me */}

      {/* <Toggle/> */}
      <section className="Intro bg-[#FFFFFF] dark:bg-[#030712] transition-all duration-300 ease-in-out animate-fade-in">
        <div className="container max-w-[1200px] mx-auto px-7">
          <Intro />
        </div>
      </section>

      {/* About me */}

      <section className="About-me bg-[#F9FAFB] dark:bg-[#111827] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <div className="container max-w-[1200px] mx-auto px-7">
          <About />

          {/* <About /> */}
        </div>
      </section>

      {/* skills */}

      <section className="tech-knowledge bg-[#FFFFFF] dark:bg-[#030712] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <div className="container max-w-[1200px] mx-auto px-7">
          <Skills />
        </div>
      </section>

      {/* Experience */}

      <section
        id="work"
        className="Experience bg-[#F9FAFB] dark:bg-[#111827] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in"
      >
        <div className="container max-w-[1200px] mx-auto px-7">
          <Experience />
        </div>
      </section>

      {/* Projects */}

      <section
        id="projects"
        className="projects bg-[#FFFFFF] dark:bg-[#030712] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in"
      >
        <div className="container max-w-[1200px] mx-auto px-7">
          <Projectsmain projs={num} />
        </div>
      </section>

      {/* Testimonials */}

      <section className="testimonials bg-[#F9FAFB] dark:bg-[#111827] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <div className="container flex max-w-[1200px] mx-auto px-7">
          <Testimonialsmain
            pass={
              <>
                <Testimonials
                  pic={deba}
                  message={debaMsg}
                  name={"Debarun Das"}
                  company={"Ex-Intern, Webel"}
                  link={debaLink}
                />
                <Testimonials
                  pic={sneha}
                  message={sneMsg}
                  name={"Sneharta Roy"}
                  company={"Ex-Intern, Celebal"}
                  link={snehLink}
                />
                <Testimonials
                  pic={arnab}
                  message={arnabMsg}
                  name={"Arnab Chakraborty"}
                  company={"Ex-Intern, Chittaranjan Locomotive Works"}
                  link={arnabLink}
                />
              </>
            }
          />
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-[#FFFFFF] dark:bg-[#030712] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <div className="container max-w-[1200px] mx-auto px-7">
          <Footer />
        </div>
      </footer>
      <div className="subfooter mb-2 bg-[#F9FAFB] dark:bg-[#111827] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <div className="container max-w-[1200px] mx-auto px-7">
          <div className="text-center text-sm text-[#4B5563] dark:text-gray-400 py-6">
            © 2025 | Designed and coded with ❤️ by Bishnu Mukherjee
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
