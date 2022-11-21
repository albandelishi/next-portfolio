import Image from "next/image";
import Link from "next/link";

function CaourselItem({
  carouselTitle,
  carouselDescription,
  carouselLink,
  carouoselLinkTitle,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className="card">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
      />
      <div className="card-body">
        <h3 className="card-title">{carouselTitle}</h3>
        <p className="card-text">{carouselDescription}</p>
        {carouselLink && (
          <Link
            href={carouselLink}
            target="_blank"
            className="btn btn-get-in-touch"
          >
            {carouoselLinkTitle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default CaourselItem;
