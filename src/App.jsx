function App() {
  document.body.style.backgroundColor = "rgb(31, 38, 50)";

  return (
    <div className="font-manrope relative flex h-screen flex-col items-center justify-center px-2">
      <section className="bg-darkGrayishBlue rounded-xl px-1 py-12 text-center">
        <p className="text-green mb-6 text-sm tracking-[0.2em]">ADVICE #117</p>
        <q className="text-cyan text-[28px]/8 font-bold">
          It is easy to sit up and take notice, what's difficult is getting up
          and taking action.
        </q>
        <img
          src="src/assets/pattern-divider-mobile.svg"
          alt="pattern divider"
          className="mx-auto mt-8 mb-4 w-[90%]"
        />
      </section>
      <button className="bg-green -mt-8 flex h-16 w-16 items-center justify-center rounded-full">
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
