import Link from "next/link";
import { Linkedin, GitHub } from "react-feather";
import data from "../assets/data";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  const { socialLinks, footer } = data;

  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="d-flex justify-content-center">
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
        <div className="d-flex justify-content-center">
          <span className="">{`© ${year} - ${footer.author}`}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
