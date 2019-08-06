import React, { useContext } from "react";
import { Context } from "../store";

const Item = ({ id }) => {
  const [items, setItems] = useContext(Context);

  const handleIncrementing = () => {
    let copy = [...items];

    copy[id].count++;

    setItems(copy);
  };

  const handleDecrementing = () => {
    let copy = [...items];

    copy[id].count--;

    setItems(copy);
  };

  return (
    <div>
      <h5>
        {items[id].text} <code className="mr-1">{items[id].count}</code>
        <button
          type="button"
          className="btn btn-outline-success btn-sm mr-1"
          onClick={handleIncrementing}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={handleDecrementing}
        >
          -
        </button>
      </h5>
    </div>
  );
};

export default Item;
