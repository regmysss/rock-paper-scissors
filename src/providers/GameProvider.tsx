import { useCallback, useEffect, useState } from "react";
import { SOUNDS } from "../constants/sounds";
import { GameContext } from "../contexts/GameContext";
import type { Choice } from "../types/choice";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [showResult, setShowResult] = useState<boolean>(false);
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [score, setScore] = useState({
        win: 0,
        lose: 0,
    });

    const updateScore = (gameResult: string) => {
        setScore((prevScore) => {
            switch (gameResult) {
                case "win":
                    return { ...prevScore, win: prevScore.win + 1 };
                case "lose":
                    return { ...prevScore, lose: prevScore.lose + 1 };
                default:
                    return prevScore;
            }
        });
    };

    const determinateChoise = useCallback(
        (playerChoice: string, computerChoice: string) => {
            if (playerChoice === computerChoice) {
                setResult("tie");
                SOUNDS.tie.play();
                return;
            }

            if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                updateScore("win");
                setResult("win");
                SOUNDS.win.play();
            } else {
                updateScore("lose");
                setResult("lose");
                SOUNDS.lose.play();
            }
        },
        []
    );

    useEffect(() => {
        if (playerChoice && computerChoice)
            setTimeout(() => {
                determinateChoise(playerChoice.id, computerChoice.id);
                setShowResult(true);
            }, 1000);
    }, [playerChoice, computerChoice, determinateChoise]);

    const resetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult(null);
        setShowResult(false);
    };

    return (
        <GameContext.Provider
            value={{
                showResult,
                playerChoice,
                computerChoice,
                result,
                score,
                setPlayerChoice,
                setComputerChoice,
                setResult,
                resetGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
