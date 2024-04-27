import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [userName, setUserName] = useState("");

  function handleSetName() {
    setUserName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknow entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
