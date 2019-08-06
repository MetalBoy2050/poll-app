import React from "react";
import Poll from "./components/Poll";
import Form from "./components/Form";
import { Provider } from "./store";

const App = () => {
  return (
    <Provider>
      <div>
        <h1>Poll App</h1>
        <Poll />
        <Form />
      </div>
    </Provider>
  );
};

export default App;
