import React, { useContext, useState } from "react";
import { Context } from "../store";

const Form = () => {
  const [items, setItems] = useContext(Context);
  let [curItem, setCurItem] = useState({ text: "", count: 0 });

  const handleSubmit = e => {
    e.preventDefault();

    setItems([...items, curItem]);
    setCurItem({ text: "", count: 0 });
  };

  const handleChange = e => {
    setCurItem({ text: e.target.value, count: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={curItem.text} type="text" />
    </form>
  );
};

export default Form;
