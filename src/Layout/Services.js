import ServiceCard from "../components/ServiceCard";
import data from "../assets/data";
function Services() {
  const { services } = data;

  return (
    <section
      id="services"
      className="container h-100 services"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h2>Services</h2>
      <div className="row mt-3">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.iconSource}
              imageAlt={service.iconAlt}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
