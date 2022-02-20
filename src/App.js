import React from "react";
import StartupPage from "./components/StartupPage";
import QuizzesView from "./components/QuizzesView";
import "./App.css";

function App() {
    const [started, setIsSterted] = React.useState(() => false);
    function goToQuizzes() {
        setIsSterted((started) => true);
    }

    return (
        <>
            {!started ? (
                <StartupPage goToQuizzes={goToQuizzes} />
            ) : (
                <QuizzesView />
            )}
        </>
    );
}

export default App;
