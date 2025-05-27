import Image from "./Image";

const Human = ({ human }) => {
  return (
    <div>
      <h3>
        {human.name} {human.planet}
      </h3>
      <Image url={human.image} />
    </div>
  );
};

export default Human;
