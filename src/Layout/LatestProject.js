import { ChevronRight, ChevronLeft } from "react-feather";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import data from "../assets/data";

import CarouselItem from "../components/CarouselItem";

SwiperCore.use([Navigation, Pagination, A11y]);

function LatestProject() {
  const { projects } = data;

  return (
    <section
      id="projects"
      className="container h-100 projects"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h2>Latest Project</h2>
      <div className="d-flex justify-content-end">
        <button className="btn btn-slider next">
          <ChevronRight />
        </button>
        <button className="btn btn-slider prev">
          <ChevronLeft />
        </button>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        slidesPerView={3}
        spaceBetween={10}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <CarouselItem
                carouselTitle={project.title}
                carouselDescription={project.description}
                imageSrc={project.src}
                imageAlt={project.alt}
                carouselLink={project.link}
                carouoselLinkTitle={project.linkTitle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default LatestProject;
