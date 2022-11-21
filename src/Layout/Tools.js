import Image from "next/image";
import data from "../assets/data";

function Tools() {
  const { tools } = data;
  const firstRow = tools.firstRow;
  const secondRow = tools.secondRow;
  return (
    <>
      <section
        className="tools-wrapper h-100"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2 className="tools-heading">Tools</h2>
        <div id="tools" className="container-fluid h-100 tools">
          <div className="">
            <div className="row justify-content-start">
              {firstRow.map((tool) => {
                return (
                  <div className="col-3 col-sm-2 col-md-2" key={tool.id}>
                    <Image
                      alt={tool.alt}
                      src={tool.src}
                      height={72}
                      width={72}
                    />
                  </div>
                );
              })}
            </div>
            <div className="row justify-content-between mt-5">
              {secondRow.map((tool) => {
                return (
                  <div className="col" key={tool.id}>
                    <Image
                      alt={tool.alt}
                      src={tool.src}
                      height={72}
                      width={72}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tools;
