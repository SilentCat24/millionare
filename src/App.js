import { useState, useEffect } from "react";
import "./App.css";
import Trivia from "./components/Trivia/Trivia";
import Start from "./components/Start/Start";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "who won 2011 cricket world cup",
      answers: [
        {
          text: "India",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "Zimbabwe",
          correct: false,
        },
        {
          text: "West Indies",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "Which animal is known as the 'Ship of the Desert '",
      answers: [
        {
          text: "cheetah",
          correct: false,
        },
        {
          text: "camel",
          correct: true,
        },
        {
          text: "panda",
          correct: false,
        },
        {
          text: "lion",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "Who is ex-prsident of America",
      answers: [
        {
          text: "Joe Bide",
          correct: false,
        },
        {
          text: "lincoln",
          correct: false,
        },
        {
          text: "Obama",
          correct: false,
        },
        {
          text: "D trump",
          correct: true,
        },
      ],
    },

    {
      id: 7,
      question: "Who is the first president of India",
      answers: [
        {
          text: "Subhash Chandra Bose",
          correct: true,
        },
        {
          text: "Nehru",
          correct: false,
        },
        {
          text: "gandhi ji",
          correct: false,
        },
        {
          text: "Modi ji",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "which captain have won all the ICC trophies in Cricket",
      answers: [
        {
          text: "Kholi",
          correct: false,
        },
        {
          text: "Sachin",
          correct: false,
        },
        {
          text: "MS Dhoni",
          correct: true,
        },
        {
          text: "R Sharma",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: " which is the national flower of India",
      answers: [
        {
          text: "jasmine",
          correct: true,
        },
        {
          text: "lotus",
          correct: false,
        },
        {
          text: "Marie gold",
          correct: false,
        },
        {
          text: "Rose",
          correct: true,
        },
      ],
    },

    {
      id: 10,
      question: "when did sachin tendulkar got retiremnet",
      answers: [
        {
          text: "23/12/2012",
          correct: true,
        },
        {
          text: "28/12/2012",
          correct: false,
        },
        {
          text: "29/12/2012",
          correct: false,
        },
        {
          text: "26/11/2013",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: "Most Populat programming language ",
      answers: [
        {
          text: "c",
          correct: true,
        },
        {
          text: "java",
          correct: false,
        },
        {
          text: "Python",
          correct: true,
        },
        {
          text: "Node Js",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "Which langauge is known as mother of all langauges",
      answers: [
        {
          text: "Java",
          correct: false,
        },
        {
          text: "C",
          correct: true,
        },
        {
          text: "Sql",
          correct: false,
        },
        {
          text: "Html",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question: "Who is the Richest person in the world",
      answers: [
        {
          text: "Adani",
          correct: false,
        },
        {
          text: "ambani",
          correct: false,
        },
        {
          text: "Bilgates",
          correct: false,
        },
        {
          text: "W buffet",
          correct: true,
        },
      ],
    },

    {
      id: 14,
      question: "India's most popular politician",
      answers: [
        {
          text: "Modi",
          correct: true,
        },
        {
          text: "Amit shah",
          correct: false,
        },
        {
          text: "Mamatha Banargee",
          correct: false,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question: "Who invented Microsoft Excel",
      answers: [
        {
          text: "Charles Simonyi",
          correct: true,
        },
        {
          text: "Bilgates",
          correct: false,
        },
        {
          text: "Adam ",
          correct: false,
        },
        {
          text: "Mark Zulerberg",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 4000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 1250000" },
    { id: 13, amount: "$ 2500000" },
    { id: 14, amount: "$ 5000000" },
    { id: 15, amount: "$ 10000000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);
  if (questionNumber > 15) {
    setTimeOut(true);
  }

  return (
    <div className="App">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
