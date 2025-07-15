import { useContext } from "react";
import type { Choice } from "../../../types/choice";
import { GameContext } from "../../../contexts/GameContext";
import { CHOICES } from "../../../constants/choices";
import "./choiceItem.css";

export const ChoiceItemBtn = ({ choice }: { choice: Choice }) => {
    const { setPlayerChoice, setComputerChoice } = useContext(GameContext);

    return (
        <button
            key={choice.id}
            className="choice-item-btn"
            onClick={() => {
                setPlayerChoice(choice);
                setComputerChoice(
                    CHOICES[Math.floor(Math.random() * CHOICES.length)]
                );
            }}
        >
            <img src={choice.image} alt={choice.name} title={choice.name} />
            <span>{choice.name}</span>
        </button>
    );
};

interface ChoiceItemProps {
    player: string;
    choice: Choice;
}

export const ChoiceItem = ({ player, choice }: ChoiceItemProps) => {
    return (
        <div
            className={`choice-item ${
                player === "player" ? "player" : "computer"
            }`}
        >
            <h3>{player === "player" ? "You" : "Computer"}</h3>
            <img src={choice.image} alt={choice.name} />
            <span>{choice.name}</span>
        </div>
    );
};
