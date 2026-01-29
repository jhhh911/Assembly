import { useState } from "react";
import { languages } from "./languages";

export default function Hangman() {
  const [currentWord, setCurrentWord] = useState("react");

  const languageList = languages.map(language => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <div style={styles} className="chips" key={language.name}>
        {language.name}
      </div>
    );
  });

  const letterElements = [...currentWord.toUpperCase()].map((letter, i) => {
    return <span className="letter-elements" key={i}>{letter}</span>;
  });

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const keyboardElements = [...alphabet.toUpperCase()].map(letter => {
    return <button className="letter-guess" key={letter}>{letter}</button>
  })

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the <br />
          programming world safe from Assembly!
        </p>
      </header>

      <section className="status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageList}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
