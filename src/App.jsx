import React from "react";
import { languages } from "./languages";

export default function Hangman() {
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
    </main>
  );
}
