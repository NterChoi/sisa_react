import { useState } from "react";

const Cart = () => {
  const menu = {
    icetea: 2000,
    choco: 3500,
    americano: 1500,
  };
  const [num, setNum] = useState(0);

  const buyIcetea = () => {
    setNum((prev) => prev + +menu.icetea);
  };

  const buyChoco = () => {
    setNum((prev) => prev + +menu.choco);
  };

  const buyAmericano = () => {
    setNum((prev) => prev + +menu.americano);
  };

  return (
    <>
      <span>아이스티 2000원</span> <button onClick={buyIcetea}>구매</button>
      <span>초코라떼 3500원</span> <button onClick={buyChoco}>구매</button>
      <span>아메리카노 1500원</span>{" "}
      <button onClick={buyAmericano}>구매</button>
      <span>총금액 : {num}</span>
      <button
        onClick={() => {
          setNum((prev) => (prev = 0));
        }}
      >
        초기화
      </button>
    </>
  );
};

export default Cart;
