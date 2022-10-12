function Card(props) {
  return (
    <div className="container">
      <div className="Card">
        <img className="images" src={props.url} alt="foto" />
        <span className="id">{props.id}</span>
      </div>
      <div className="title">
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;
