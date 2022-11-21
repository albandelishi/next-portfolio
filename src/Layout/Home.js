import Link from "next/link";
import { Linkedin, GitHub } from "react-feather";
import Lottie from "lottie-react";
import programmingAnimation from "../assets/lotties/programming.json";
import data from "../assets/data";

function Home() {
  const { home, socialLinks } = data;
  return (
    <section
      id="home"
      className="container h-100 home"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="row h-100">
        <div className="col-md-6">
          <span className="console-text">
            console.log(“{home.consoleText}”);
          </span>
          <h1>
            {home.header} <span className="waving-hand">👋</span>
          </h1>
          <p>{home.description}</p>
          <Link
            className="me-2"
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <Linkedin />
          </Link>
          <Link
            data-aos="fade-down"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <GitHub />
          </Link>
        </div>
        <div
          className="col-md-6 d-none d-sm-none d-md-block"
          data-aos="fade-down"
        >
          <div className="lottie-animation">
            <Lottie animationData={programmingAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
