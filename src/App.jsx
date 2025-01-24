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
    <div className="font-manrope relative mx-auto flex h-screen max-w-[345px] flex-col items-center justify-center px-2">
      <section className="bg-darkGrayishBlue rounded-xl px-1 py-12 text-center">
        <p className="text-green mb-6 text-sm tracking-[0.2em]">
          ADVICE #{quoteId}
        </p>
        <q className="text-cyan text-[24px]/8 font-bold">{quote}</q>
        <img
          src="src/assets/pattern-divider-mobile.svg"
          alt="pattern divider"
          className="mx-auto mt-8 mb-4 w-[90%]"
        />
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
