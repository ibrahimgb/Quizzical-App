export default function StartupPage(props) {
    return (
        <div className="App">
            <h1>Quizzical</h1>
            <h2>Some description if needed</h2>
            <button className="intro" type="button" onClick={props.goToQuizzes}>
                Start quiz
            </button>
            <div className="spot1"></div>
            <div className="spot2"></div>
        </div>
    );
}
