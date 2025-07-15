import { useContext } from "react";
import "./scoreBoard.css";
import { GameContext } from "../../contexts/GameContext";

export const ScoreBoard = () => {
    const { score } = useContext(GameContext);

    return (
        <section className="score-board">
            <div className="score-board-wrapper">
                <div className="score-board-content">
                    <div className="score-board-item win">
                        <h2>WIN</h2>
                        <p>{score.win}</p>
                    </div>
                    <div className="score-board-item lose">
                        <h2>LOSE</h2>
                        <p>{score.lose}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
