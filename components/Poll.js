import React from "react";
import Item from "./Item";
import { useContext } from "react";
import { Context } from "../store";

const Poll = () => {
  const [items, setItems] = useContext(Context);

  const style = {
    listStyleType: "none"
  };

  return (
    <ul>
      {items.map((item, id) => (
        <li style={style} key={id}>
          <Item id={id} />
        </li>
      ))}
    </ul>
  );
};

export default Poll;
