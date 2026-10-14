import Title from "./Title";
import Description from "./Description";

const Info = ({ title, desc }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Title title={title} />
      <Description desc={desc} />
    </div>
  );
};

export default Info;
