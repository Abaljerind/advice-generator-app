import { useState, useEffect } from "react";
import PatternDesktop from "./assets/pattern-divider-desktop.svg";
import PatternMobile from "./assets/pattern-divider-mobile.svg";
import iconDice from "./assets/icon-dice.svg";

function App() {
  const [quote, setQuote] = useState("");
  const [quoteId, setQuoteId] = useState(null);

  async function handleGetQuote() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");

      if (!res.ok) {
        throw new Error(`Oops, something went wrong. Status: ${res.status}`);
      }
      const data = await res.json();
      setQuote(data.slip.advice);
      setQuoteId(data.slip.id);
    } catch (error) {
      console.error("An error occured while fetching the quote:", error); // can be removed in production
      alert(
        "Sorry, we couldn't fetch a quote at this time. Please try again later.",
      );
    }
  }

  useEffect(() => {
    handleGetQuote();
  }, []);

  document.body.style.backgroundColor = "rgb(31, 38, 50)";

  return (
    <div className="font-manrope mx-auto flex h-screen max-w-[355px] flex-col items-center justify-center px-2 lg:w-full lg:max-w-[500px]">
      <section className="bg-darkGrayishBlue w-full max-w-[500px] min-w-[355px] rounded-xl px-4 py-12 text-center lg:px-8">
        <p className="text-green mb-6 text-sm tracking-[0.2em]">
          ADVICE #{quoteId}
        </p>
        <q className="text-cyan text-[24px]/8 font-bold break-words lg:text-[28px]/8">
          {quote}
        </q>
        <picture>
          {/* Gambar untuk layar besar */}
          <source srcSet={PatternDesktop} media="(min-width: 1024px)" />
          {/* Gambar untuk layar kecil */}
          <img
            src={PatternMobile}
            alt="pattern divider"
            className="mx-auto mt-8 mb-4 w-[90%] lg:w-full"
          />
        </picture>
      </section>
      <button
        className="bg-green hover:shadow-green/50 -mt-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition duration-300 ease-in-out hover:shadow-xl"
        onClick={handleGetQuote}
      >
        <img src={iconDice} alt="icon dice" className="h-7 w-7" />
      </button>
    </div>
  );
}

export default App;
