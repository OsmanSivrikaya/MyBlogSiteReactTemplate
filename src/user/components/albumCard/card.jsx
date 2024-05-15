const Card = (photo) => {
  return (
    <div className="card m-3" key={photo.photo.id} style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={photo.photo.thumbnailUrl}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <p className="card-text">{photo.photo.title}</p>
        <a href={photo.photo.url} target="blank" className="btn btn-primary">
          Open Photo Full Screen
        </a>
      </div>
    </div>
  );
};

export default Card;
