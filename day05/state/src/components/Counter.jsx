import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  if (num < 0) {
    return (
      <>
        <button
          onClick={() => {
            setNum((prev) => {
              return (prev -= 1);
            });
          }}
        >
          -
        </button>
        <span className="text-red-600">{num}</span>
        <button
          onClick={() => {
            setNum((prev) => {
              return (prev += 1);
            });
          }}
        >
          +
        </button>
      </>
    );
  } else if (num > 10) {
    return (
      <>
        <button
          onClick={() => {
            setNum((prev) => {
              return (prev -= 1);
            });
          }}
        >
          -
        </button>
        <span className="text-blue-500">{num}</span>
        <button
          onClick={() => {
            setNum((prev) => {
              return (prev += 1);
            });
          }}
        >
          +
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            setNum((prev) => {
              return (prev -= 1);
            });
          }}
        >
          -
        </button>
        <span>{num}</span>
        <button
          onClick={() => {
            setNum((prev) => {
              return (prev += 1);
            });
          }}
        >
          +
        </button>
      </>
    );
  }
};

export default Counter;
