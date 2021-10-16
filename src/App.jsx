import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [japanShowFlag, setjapanShowFlag] = useState(true);

  const onClickCounUp = () => {
    setNum(num + 1);
  };

  const onClickShowFlag = () => {
    setjapanShowFlag(!japanShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      japanShowFlag || setjapanShowFlag(true);
    } else {
      japanShowFlag && setjapanShowFlag(false);
    }
  }, [num]);

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
