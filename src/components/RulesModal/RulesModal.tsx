import { useEffect } from "react";
import "./rulesModal.css";

interface RulesModalProps {
    toggleRules: () => void;
}

export const RulesModal = ({ toggleRules }: RulesModalProps) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section className="modal" onClick={toggleRules}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Rules</h2>
                <p>
                    The game is played between two players. Each player chooses
                    one of the three options: rock, paper, or scissors. The
                    rules are simple:
                    <ul>
                        <li>Rock crushes scissors</li>
                        <li>Scissors cuts paper</li>
                        <li>Paper covers rock</li>
                    </ul>
                    The player who makes the winning choice scores a point.
                </p>
                <button className="close-btn" onClick={toggleRules}>
                    Close
                </button>
            </div>
        </section>
    );
};
