import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [japanShowFlag, setjapanShowFlag] = useState(true);

  const onClickCounUp = () => {
    setNum(num + 1);
  };

  const onClickShowFlag = () => {
    setjapanShowFlag(!japanShowFlag);
  };

  if (num % 3 === 0) {
    setjapanShowFlag(true);
  } else {
    setjapanShowFlag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCounUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickShowFlag}>on/off</button>
      {japanShowFlag && <p>🇯🇵</p>}
    </>
  );
};

export default App;
