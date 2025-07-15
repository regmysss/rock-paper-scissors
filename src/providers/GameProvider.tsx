import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (playerChoice && computerChoice) {
            const timeout = setTimeout(() => {
                const player = playerChoice.id;
                const computer = computerChoice.id;

                if (player === computer) {
                    setResult("tie");
                    SOUNDS.tie.play();
                } else if (
                    (player === "rock" && computer === "scissors") ||
                    (player === "paper" && computer === "rock") ||
                    (player === "scissors" && computer === "paper")
                ) {
                    updateScore("win");
                    setResult("win");
                    SOUNDS.win.play();
                } else {
                    updateScore("lose");
                    setResult("lose");
                    SOUNDS.lose.play();
                }

                setShowResult(true);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [playerChoice, computerChoice]);

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
