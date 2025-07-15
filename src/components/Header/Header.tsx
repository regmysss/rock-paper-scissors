import "./header.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-content">
                    <a className="logo" href=".">
                        <img src="logo.png" alt="logo" />
                    </a>
                    <button title="Rules" className="rule-btn">
                        <img src="rules.svg" alt="rules" />
                    </button>
                </div>
            </div>
        </header>
    );
};
