// reactの基盤
// import React from "react";
// import ReactDom from "react-dom";

// const App = () => {
//   return <h1>こんにちは！</h1>;
// };

// ReactDom.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
