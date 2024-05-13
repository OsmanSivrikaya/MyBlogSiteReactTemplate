import Card from "./card";

const CardList = ({ photos }) => {
  return (
    <div className="flex items-center flex-wrap justify-center">
      {photos && photos.map((item) => <Card key={item.id} photo={item}></Card>)}
    </div>
  );
};

export default CardList;
