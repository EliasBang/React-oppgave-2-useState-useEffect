import "./App.css";
import CookieClicker from "./components/CookieClicker";
import CatFact from "./components/CatFacts";
import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [showCatFact, setShowCatFact] = useState(false);
  return (
    <>
      <CookieClicker />

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Random cat fact</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <button
                type="button"
                className="counter"
                onClick={() => {
                  if (!showCatFact) setShowCatFact(true);
                  if (showCatFact) setShowCatFact(false);
                }}
              >
                Get facts
              </button>
            </li>
            <li>
              <a href="https://catfact.ninja" target="_blank">
                Learn more
              </a>
            </li>
          </ul>
          {showCatFact && <CatFact />}
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Users</h2>
          <p>Join the community</p>
          <Users />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
