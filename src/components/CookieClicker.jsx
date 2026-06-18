import { useState } from "react";
export default function CookieClicker() {
  const [count, setCount] = useState(0);

  return (
    <section id="center">
      <div className="hero">
        <button
          type="button"
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          <img
            src="src/assets/cookie-1.png"
            className="base"
            width="170"
            height="179"
            alt="Image of a Cookie"
          />
        </button>
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Click <code>cookie</code> to get a <code>point</code>
        </p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount(count * -2)}
      >
        Count is {count}
      </button>
    </section>
  );
}
