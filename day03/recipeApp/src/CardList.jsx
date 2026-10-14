import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <section>
      {data.map((v) => {
        return <Card key={v.id} {...v} />;
      })}
    </section>
  );
};

export default CardList;
