import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Game.css";
import paper from "../img/paper.png";
import rock from "../img/rock.png";
import scissors from "../img/scissors.png";

const Game = () => {
  const [userChoice, setuserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const choices = ["rock", "paper", "scissors"];
  const { username, randomId, set_number } = useParams();
  const rivalName = "NotNeko";

  const handleClick = (value) => {
    setuserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomNumber];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("YOU WIN!");
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("YOU LOSE!");
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        setResult("DRAW!");
        break;
    }
  }, [computerChoice, userChoice]);

  return (
    <div id="Game">
      <div id="header">
        <div className="phrase">
          <h2>Let's the game begin</h2>
          <p>Good Luck! </p>
        </div>
        <div className="arrow">
          <span className="arrow-line"></span>
          <span className="arrow-right"></span>
        </div>
        <div className="game-status">
          <p className="number-round">{set_number}° Round</p>
          <p className="won-round">"#" of won rounds </p>
        </div>
      </div>
      <div id="options">
        <div className="rock">
          <img src={rock} alt="rock" onClick={() => handleClick("rock")} />
          <button onClick={() => handleClick("rock")}>rock</button>
        </div>
        <div className="paper">
          <img src={paper} alt="paper" onClick={() => handleClick("paper")} />
          <button onClick={() => handleClick("paper")}>paper</button>
        </div>
        <div className="scissors">
          <img
            src={scissors}
            alt="scissors"
            onClick={() => handleClick("scissors")}
          />
          <button onClick={() => handleClick("scissors")}>scissors</button>
        </div>
      </div>
      <h2 className="game-result">{result}</h2>
      <div className="new-or-out">
        <div className="buttons-choice">
          <button
            className="new-game"
            onClick={() => {
              navigate(
                `/Game/${username}/${randomId}/${parseInt(set_number) + 1}`
              );
              window.location.reload(false);
            }}
          >
            New Game
          </button>
          <button
            className="exit"
            onClick={() => {
              navigate(`/CreateJoinGame/${username}`);
            }}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
