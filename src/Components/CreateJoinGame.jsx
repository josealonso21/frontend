import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/CreateJoinGame.css";
const API = process.env.REACT_APP_NEKO;
const randomId = Math.floor(Math.random() * 10000);
let set_value = 1;

const CreateJoinGame = () => {
  const [joinCode, setJoinCode] = useState("");
  const { username } = useParams();
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/CreateJoinGame/${username}`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      withCredentials: false,
      body: JSON.stringify({
        idGame: randomId,
        username_1: username,
        username_2: "",
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else {
      navigate(`/Game/${username}/${randomId}/${set_value}`);
    }
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/CreateJoinGame/${username}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      withCredentials: false,
      body: JSON.stringify({
        idGame: joinCode,
        username_1: "",
        username_2: username,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else {
      navigate(`/Game/${username}/${joinCode}/${set_value}`);
    }
  };

  return (
    <div id="Create-Join-Game">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Log Out
      </button>
      <h1 className="create-title">Create or Join Game</h1>
      <div className="main-create-join">
        <div className="create-game">
          <p>#{randomId}</p>
          <button onClick={handleCreate}>Create Game</button>
        </div>
        <div className="join-game">
          <input
            type="text"
            onChange={(e) => {
              setJoinCode(e.target.value);
            }}
            value={joinCode}
          />
          <button onClick={handleJoin}>Join Game</button>
        </div>
      </div>
    </div>
  );
};
export default CreateJoinGame;
