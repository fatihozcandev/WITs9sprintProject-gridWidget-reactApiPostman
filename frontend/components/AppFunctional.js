import React, { useState } from "react";
import useInputHandler from "./hooks/useInputHandler";

// önerilen başlangıç stateleri
const initialEmail = "";
const initialCounter = 0;
const initialIndex = 4; //  "B" nin bulunduğu indexi

const errorMessages = {
  left: "Sola gidemezsiniz",
  right: "Sağa gidemezsiniz",
  up: "Yukarıya gidemezsiniz",
  down: "Aşağıya gidemezsiniz",
};

export default function AppFunctional(props) {
  const [counter, setCounter] = useState(initialCounter);
  const [index, setIndex] = useState(initialIndex);
  const [yatayIdx, setYatayIdx] = useState(2);
  const [dikeyIdx, setDikeyIdx] = useState(2);
  const [errorMessage, setErrorMessage] = useState("");
  const [yazi, yaziDegistir] = useInputHandler();
  /* const postObject = {
    email: email,
    x: yatayIdx
    y: dikeyIdx
    steps: counter,
  }; */

  function clickHandler(event) {
    const { id } = event.target;

    if (id === "left") {
      setErrorMessage("");
      if (yatayIdx > 1) {
        setCounter(counter + 1);
        setYatayIdx(yatayIdx - 1);
        setIndex(index - 1);
      } else {
        setErrorMessage(errorMessages.left);
      }
    }
    if (id === "right") {
      setErrorMessage("");
      if (yatayIdx < 3) {
        setCounter(counter + 1);
        setYatayIdx(yatayIdx + 1);
        setIndex(index + 1);
      } else {
        setErrorMessage(errorMessages.right);
      }
    }
    if (id === "up") {
      setErrorMessage("");
      if (dikeyIdx > 1) {
        setCounter(counter + 1);
        setDikeyIdx(dikeyIdx - 1);
        setIndex(index - 3);
      } else {
        setErrorMessage(errorMessages.up);
      }
    }
    if (id === "down") {
      setErrorMessage("");
      if (dikeyIdx < 3) {
        setCounter(counter + 1);
        setDikeyIdx(dikeyIdx + 1);
        setIndex(index + 3);
      } else {
        setErrorMessage(errorMessages.down);
      }
    }
    if (id === "reset") {
      setCounter(initialCounter);
      setYatayIdx(2);
      setDikeyIdx(2);
      setIndex(initialIndex);
      setErrorMessage("");
    }
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }
  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">
          Koordinatlar ({yatayIdx}, {dikeyIdx})
        </h3>
        <h3 id="steps">{counter} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div key={idx} className={`square${idx === index ? " active" : ""}`}>
            {idx === index ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message">{errorMessage}</h3>
      </div>
      <div>
        <card>
          <h3>{yazi}</h3>
          <input onChange={yaziDegistir} value={yazi} type="text" />
        </card>
      </div>
      <div id="keypad">
        <button type="button" onClick={clickHandler} id="left">
          SOL
        </button>
        <button type="button" onClick={clickHandler} id="up">
          YUKARI
        </button>
        <button type="button" onClick={clickHandler} id="right">
          SAĞ
        </button>
        <button type="button" onClick={clickHandler} id="down">
          AŞAĞI
        </button>
        <button type="button" onClick={clickHandler} id="reset">
          reset
        </button>
      </div>
      <form>
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
