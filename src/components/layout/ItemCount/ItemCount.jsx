import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <p>{count}</p>
      <button onClick={aumentar}>+</button>
    </div>
  );
};

export default ItemCount;
