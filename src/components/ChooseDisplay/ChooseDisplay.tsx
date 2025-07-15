import "./chooseDisplay.css";
import { CHOICES } from "../../constants/choices";
import { ChoiceItemBtn } from "../UI/ChoiceItem/ChoiceItem";

export const ChooseDisplay = () => {
    return (
        <section className="choice-display">
            <div className="choice-display-wrapper">
                <div className="choice-display-content">
                    <h2>Choose your choice</h2>
                    <div className="choice-list">
                        {CHOICES.map((choice) => (
                            <ChoiceItemBtn key={choice.id} choice={choice} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
