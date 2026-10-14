import Video from "./Video/Video";

const App = () => {
  return (
    <div>
      <Video
        url="https://i.ytimg.com/vi/ltnJyBckSdA/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYVCBdKGUwDw==&rs=AOn4CLDj7jatN_GEH208p6IdXjBwGJvA3Q"
        title="요루시카 짱짱"
        description="10월 14일 구름을 빠져나와 바람의 방향으로 공개"
      ></Video>
      <Video
        url="https://i.ytimg.com/vi/6fmSl15SCOM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFS0XqlspFi-yXGxEpt55hrcXMGg"
        title="五月は花緑青の窓辺から"
        description="이 노래 굉장하다!"
      ></Video>
      <Video
        url="https://i.ytimg.com/vi/6-YdwCEmPro/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCLluBeXMR2UKMzmHFXatIUEq6EoQ"
        title="요루시카 낮도둑 라이브"
        description="스이누나 시타우치 레전드"
      ></Video>
    </div>
  );
};

export default App;
