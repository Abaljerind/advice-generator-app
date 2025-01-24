import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [quoteId, setQuoteId] = useState(null);

  async function handleGetQuote() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setQuote(data.slip.advice);
    setQuoteId(data.slip.id);
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
          <source
            srcSet="src/assets/pattern-divider-desktop.svg"
            media="(min-width: 1024px)"
          />
          {/* Gambar untuk layar kecil */}
          <img
            src="src/assets/pattern-divider-mobile.svg"
            alt="pattern divider"
            className="mx-auto mt-8 mb-4 w-[90%] lg:w-full"
          />
        </picture>
      </section>
      <button
        className="bg-green hover:shadow-green/50 -mt-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition duration-300 ease-in-out hover:shadow-xl"
        onClick={handleGetQuote}
      >
        <img
          src="src/assets/icon-dice.svg"
          alt="icon dice"
          className="h-7 w-7"
        />
      </button>
    </div>
  );
}

export default App;
