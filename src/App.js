import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [vowelsAmount, setVowelsAmount] = useState(0);
  const [charsAmount, setCharsAmount] = useState(0);
  const [lettersAmount, setLettersAmount] = useState(0);
  const [numbersAmount, setNumbersAmount] = useState(0);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text === "") {
      alert("First type some text ;)");
    } else {
      setIsClicked(true);
      let vowels = 0;
      let chars = 0;
      let letters = 0;
      let numbers = 0;
      let spaces = 0;
      let string = text;
      string = string.toLowerCase().split("");
      string.map((letter, i) => {
        if (
          letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u" ||
          letter === "ó" ||
          letter === "ą" ||
          letter === "ę" ||
          letter === "y"
        )
          vowels = vowels + 1;
        if (
          letter !== "1" &&
          letter !== "2" &&
          letter !== "3" &&
          letter !== "4" &&
          letter !== "5" &&
          letter !== "6" &&
          letter !== "7" &&
          letter !== "8" &&
          letter !== "9" &&
          letter !== "0"
        )
          letters = letters + 1;
        if (letter === " ") spaces = spaces + 1;
        chars = i;
        return null;
      });
      letters = letters - spaces;
      numbers = chars + 1 - spaces - letters;
      setVowelsAmount(vowels);
      setCharsAmount(chars + 1);
      setLettersAmount(letters);
      setNumbersAmount(numbers);
    }
  };

  return (
    <div className="app">
      <div className="welcome">
        <p>
          Welcome on <strong>Text Analyzer!</strong>
          <br />
          Input your text below.
        </p>
      </div>
      <div className="mainPage">
        <input
          type="text"
          value={text}
          placeholder="Type here..."
          onChange={handleChangeText}
          onClick={() => {
            setText("");
          }}
        />
        <button onClick={handleClick}>Analyze!</button>
        {isClicked ? (
          <Result
            vowels={vowelsAmount}
            chars={charsAmount}
            letters={lettersAmount}
            numbers={numbersAmount}
          />
        ) : null}
      </div>
      <div className="footer">
        <p>Text Analyzer © 2021</p>
      </div>
    </div>
  );
};

const Result = (props) => {
  return (
    <div className="output">
      <div className="analyze">
        <p>
          Liczba samogłosek: {props.vowels} <br />
          Liczba znaków: {props.chars} <br />
          Liczba liter: {props.letters} <br />
          Liczba cyfr: {props.numbers} <br />
        </p>
      </div>
      <div className="styles">
        Liczba czasowników: <br />
        Liczba rzeczowników: <br />
        Liczba przymiotników: <br />
      </div>
    </div>
  );
};

export default App;
