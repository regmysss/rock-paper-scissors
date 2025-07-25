import { useContext } from "react";
import { ChooseDisplay } from "./components/ChooseDisplay/ChooseDisplay";
import { Header } from "./components/Header/Header";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { GameContext } from "./contexts/GameContext";
import { DisplayResult } from "./components/DisplayResult/DisplayResult";

export const App = () => {
    const { playerChoice } = useContext(GameContext);

    return (
        <div className="app">
            <Header />
            <main>
                <ScoreBoard />
                {!playerChoice ? <ChooseDisplay /> : <DisplayResult />}
            </main>
            <footer>
                <p>@ 2025 Vladyslav Yarmoliuk. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;