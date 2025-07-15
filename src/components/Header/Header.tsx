import "./header.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-content">
                    <a className="logo" href=".">
                        <img src="logo.png" alt="logo" />
                    </a>
                    <button className="rule-btn">
                        <img src="rules.svg" alt="refresh" />
                    </button>
                </div>
            </div>
        </header>
    );
};
