import { createContext } from "react";
import type { Choice } from "../types/choice";

interface GameContextType {
    showResult: boolean;
    playerChoice: Choice | null;
    computerChoice: Choice | null;
    result: string | null;
    score: {
        win: number;
        lose: number;
    };
    setPlayerChoice: (choice: Choice) => void;
    setComputerChoice: (choice: Choice) => void;
    setResult: (result: string) => void;
    resetGame: () => void;
}

export const GameContext = createContext<GameContextType>({
    showResult: false,
    playerChoice: null,
    computerChoice: null,
    result: null,
    score: {
        win: 0,
        lose: 0,
    },
    setPlayerChoice: () => {},
    setComputerChoice: () => {},
    setResult: () => {},
    resetGame: () => {},
});
