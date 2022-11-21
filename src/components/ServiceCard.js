import Image from "next/image";
import Card from "react-bootstrap/Card";
function ServiceCard({ title, description, imageSrc, imageAlt }) {
  return (
    <>
      <div className="col-md-4">
        <Card className="text-white">
          <Card.Body>
            <Image
              className="mt-2 mb-2"
              src={imageSrc}
              alt={imageAlt}
              width={32}
              height={32}
            />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ServiceCard;
