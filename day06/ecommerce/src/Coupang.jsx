import { useState } from "react";

// 아메리카노 2000원
// 라떼 2500원
// 모카 3000원

const PROD = [
  { name: "americano", price: 2000 },
  { name: "latte", price: 2500 },
  { name: "moka", price: 3000 },
];

const Coupang = () => {
  const [count, setCount] = useState({ americano: 0, latte: 0, moka: 0 });

  const total = PROD.reduce((sum, p) => {
    return sum + p.price * count[p.name];
  }, 0);

  const up = (name) => {
    setCount((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const down = (name) => {
    setCount((prev) => ({ ...prev, [name]: Math.max(prev[name] - 1, 0) }));
  };

  return (
    <>
      {PROD.map((v) => {
        return (
          <>
            <div>{v.name}</div>
            <div
              onClick={() => {
                down(v.name);
              }}
            >
              -
            </div>
            <div>{count[v.name]}</div>
            <div
              onClick={() => {
                up(v.name);
              }}
            >
              +
            </div>
          </>
        );
      })}
      {total}
      <div
        onClick={() => {
          setCount({ americano: 0, latte: 0, moka: 0 });
        }}
      >
        초기화
      </div>
    </>
  );
};

export default Coupang;
