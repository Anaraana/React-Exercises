import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import "./Answer";
import { Col, Row, Statistic } from 'antd';

export default function Kahoot() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [click, setClick] = useState(null);

  const onFinish = () => {
    return console.log('finished!');
  };

  useEffect(() => {
    fetchData();
  }, []);
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 15 
  const icons = [
    "M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z",
    "M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z",
    "M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z",
    "M7,7 L25,7 L25,25 L7,25 L7,7 Z",
  ];
  const fetchData = () => {
    axios
      .get("https://opentdb.com/api.php?amount=19&category=27&difficulty=easy")
      .then((res) => {
        console.log(res);
        if (res.status === 200)
          setQuestions(
            res.data.results.map((item) => {
              return {
                question: item.question,
                answers: [
                  { answer: item.correct_answer, iscorrect: true },
                  ...item.incorrect_answers.map((incorrect) => {
                    return {
                      answer: incorrect,
                      iscorrect: false,
                    };
                  }),
                ].sort(() => Math.random() - 0.5),
              };
            })
          );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  console.log(questions);

  return (
    
    <div className="kahoot-container">
        <Col span={12}>
        <Countdown title="" value={deadline} onFinish={onFinish} />
      </Col>
      <div className="kahoot-guestions"><h1>{questions[current]?.question}</h1></div>

      {click!==null && (
      <div className="kahoot-result" style={{backgroundColor:click==="green"? 'green' : "red"}}>
        {click ==="red" ? 'wrong' : 'correct'}
      </div>)}
      <div className="kahoot-button-container">
        {" "}
         {click!==null&& (
         <button
          className="kahoot-next-button"
          onClick={() => {
            setCurrent((current) => {
              return current + 1;
            });
            setClick(null);
          }}
        >
          Next
        </button>)}
      </div>

      <div className="kahoot-answers">
        {questions[current]?.answers.map((a, Idx) => {
          return (
            <div
              className={`kahoot-one-answer bg-${Idx}`}
              style={{
                background: click ? (a.iscorrect ? "green" : "red") : "",
              }}
              onClick={() => {
                setClick(a.iscorrect 
                    ? "green" 
                    : "red");
              }}
            >
              <svg width={50} viewBox="0 0 32 32">
                <path d={icons[Idx]} style={{ fill: "white" }} />
              </svg>
              {a.answer}
            </div>
          );
        })}
      </div>

      {/* <pre>{JSON.stringify(questions, null,2)}</pre> */}
    </div>
  );
}
