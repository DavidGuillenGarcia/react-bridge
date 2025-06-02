const Pokemon = ({ name, image }) => {
  return (
    <div className="card character-card card-body m-2 p-3 shadow bg-dark text-white d-flex align-items-center">
      <img src={image} alt={name} className="character-image" />
      <span className="fs-3">{name}</span>
    </div>
  );
};
export default Pokemon;
