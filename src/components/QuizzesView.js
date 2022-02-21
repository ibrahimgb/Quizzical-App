import React from "react";

export default function QuizzesView() {
    const [evaluating, setIsEvaluating] = React.useState(true);

    const [quizzes, fetchQuizzes] = React.useState([]);

    const getData = () => {
        fetch("https://opentdb.com/api.php?amount=5&encode=base64")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                fetchQuizzes(res.results);
            });
    };

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    //atob();
    function randomAnswers(list, indexElem) {
        console.log("generationg randem");
        console.log(list);
        let randList = list;
        shuffle(randList);
        console.log("the randemise anser");
        console.log(randList);
        const randListe = randList.map((item, index) => {
            return (
                <div
                    className="answer"
                    onclick={toggleSelectedElement(indexElem, index)}
                >
                    {atob(item)}
                </div>
            );
        });
        return randListe;
    }
    function toggleSelectedElement(indexElem, index) {}
    function checkAnswers() {}

    React.useEffect(() => {
        getData();
    }, []);

    console.log(quizzes);

    const quizzesList = quizzes.map((quizze, index) => {
        return (
            <div className="question" key={quizze.question}>
                <h3>{atob(quizze.question)}</h3>
                <div className="answers">
                    {randomAnswers(
                        [].concat(
                            quizze.correct_answer,
                            quizze.incorrect_answers
                        ),
                        index
                    )}
                </div>
                <hr></hr>
            </div>
        );
    });

    return (
        <div className="App">
            {quizzesList}
            {evaluating ? (
                <div>
                    {" "}
                    <button className="checkAnswers" onClick={checkAnswers}>
                        Check answers
                    </button>{" "}
                </div>
            ) : (
                <div className="scoring">
                    <p>You scored 3/5 correct answers</p>
                    <button className="restart">Play again</button>
                </div>
            )}

            <div className="spot1"></div>
            <div className="spot2"></div>
        </div>
    );
}
