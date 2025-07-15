import { useState } from "react";
import "./header.css";
import { RulesModal } from "../RulesModal/RulesModal";

export const Header = () => {
    const [isShowRules, setShowRules] = useState<boolean>(false);

    const toggleRules = () => {
        setShowRules(!isShowRules);
    };

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-content">
                    <a className="logo" href=".">
                        <img src="logo.png" alt="logo" />
                    </a>
                    <button
                        title="Rules"
                        className="rule-btn"
                        onClick={toggleRules}
                    >
                        <img src="rules.svg" alt="rules" />
                    </button>
                </div>
            </div>
            {isShowRules && <RulesModal toggleRules={toggleRules} />}
        </header>
    );
};
