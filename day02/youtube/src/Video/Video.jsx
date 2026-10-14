import Thumbnail from "./Thumbnail";
import Title from "./Title";
import LikeButton from "./LikeButton";

const Video = ({ url, title, description }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Thumbnail url={url}></Thumbnail>
      <Title title={title} description={description}></Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LikeButton></LikeButton>
      </div>
    </div>
  );
};

export default Video;
