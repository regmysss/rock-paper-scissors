import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./displayResult.css";
import { CHOICES } from "../../constants/choices";
import type { Choice } from "../../types/choice";
import { ChoiceItem } from "../UI/ChoiceItem/ChoiceItem";

export const DisplayResult = () => {
    const { playerChoice, showResult, computerChoice, result, resetGame } =
        useContext(GameContext);
    const [animatedChoice, setAnimatedChoice] = useState<Choice>(CHOICES[0]);
    const index = useRef<number>(0);

    useEffect(() => {
        if (!showResult) {
            const interval = setInterval(() => {
                index.current = (index.current + 1) % CHOICES.length;
                setAnimatedChoice(CHOICES[index.current]);
            }, 150);

            return () => clearInterval(interval);
        } else {
            setAnimatedChoice(computerChoice!);
        }
    }, [showResult, computerChoice]);

    return (
        <section className="display-result">
            <div className="display-result-wrapper">
                <div className="display-result-content">
                    {!showResult ? (
                        <h2
                        className={`result-title wait`}
                        >Waiting for the PC...</h2>
                    ) : (
                        <h2 className={`result-title ${result} scale-in`}>
                            {result === "win"
                                ? "You Win!"
                                : result === "lose"
                                ? "You Lose!"
                                : "It's a Tie!"}
                        </h2>
                    )}
                    <div className="result-detail">
                        <ChoiceItem player="player" choice={playerChoice!} />
                        <span className="against-text">VS</span>
                        <ChoiceItem player="computer" choice={animatedChoice} />
                    </div>
                    <button
                        className={`play-again-btn`}
                        onClick={resetGame}
                        disabled={!showResult}
                    >
                        Play again
                    </button>
                </div>
            </div>
        </section>
    );
};
