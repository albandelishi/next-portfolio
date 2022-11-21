import Link from "next/link";
import Image from "next/image";
import data from "../assets/data";

import { MapPin, Mail, Linkedin, GitHub } from "react-feather";

function Contact() {
  const { contact } = data;
  return (
    <section
      id="contact"
      className="container h-100 contact mb-2"
      data-aos="fade-up"
    >
      <div className="row" style={{ paddingTop: "3rem" }}>
        <div className="col-md-6 imageMap">
          <Link href="https://www.google.com/maps/" target="_blank">
            <Image
              src="/images/map.svg"
              alt="map"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="contact-info">
            <div className="form-group row">
              <span className="col-1 contact-icon">
                <MapPin />
              </span>
              <div className="form-group col-8">
                <label>{contact.location}</label>
              </div>
            </div>
            <div className="form-group row">
              <span className="col-1 contact-icon">
                <Mail />
              </span>
              <div className="form-group col-8">
                <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
              </div>
            </div>
            <div className="form-group row">
              <span className="col-1 contact-icon">
                <Linkedin />
              </span>
              <div className="form-group col-8">
                <Link href={`mailto:${contact.linkedIn.link}`} target="_blank">
                  {contact.linkedIn.username}
                </Link>
              </div>
            </div>
            <div className="form-group row">
              <span className="col-1 contact-icon">
                <GitHub />
              </span>
              <div className="form-group col-8">
                <Link href={`mailto:${contact.github.link}`} target="_blank">
                  {contact.github.username}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
