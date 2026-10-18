import { useState } from "react";

const Coupang = () => {
  const [sum, setSum] = useState(0);
  const [catNum, setCatNum] = useState(0);
  const [waterNum, setWaterNum] = useState(0);
  const [tissueNum, setTissueNum] = useState(0);

  const minus = (fx) => {
    const func = {
      setCatNum: setSum((prev) => prev + 5000),
      setWaterNum: setSum((prev) => prev + 1000),
      tissueNum: setSum((prev) => prev + 2200),
    };
    return func[fx];
  };

  const plus = (fx) => {
    const func = {
      setCatNum: setSum((prev) => prev + 5000),
      setWaterNum: setSum((prev) => prev + 1000),
      tissueNum: setSum((prev) => prev + 2200),
    };
    return func[fx];
  };
};

return (
  <>
    <div>
      <div>
        <span>고양이 사료 5000원</span>
        <button onClick={minus(setCatNum)}>-</button>
        <span>{catNum}</span>
        <button onClick={plus(setCatNum)}>+</button>
      </div>
      <div>
        <span>물 1000원</span>
        <button onClick={minus(setWaterNum)}>-</button>
        <span>{waterNum}</span>
        <button onClick={plus(setWaterNum)}>+</button>
      </div>
      <div>
        <span>물티슈 2200원</span>
        <button onClick={minus(setNum)}>-</button>
        <span>{tissueNum}</span>
        <button>+</button>
      </div>
    </div>

    <div>고양이 사료: {catNum}</div>
    <div>물 : {waterNum}</div>
    <div> 물티슈 : {tissueNum}</div>
    <div>총금액 : {sum}</div>
  </>
);

export default Coupang;
