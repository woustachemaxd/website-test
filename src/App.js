import React, { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");

  async function fetchRandomJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });

    const data = await response.json();

    return data.joke;
  }

  useEffect(() => {
    async function loadRandomJoke() {
      const joke = await fetchRandomJoke();
      setJoke(joke);
    }
    loadRandomJoke();
  }, []);

  return (
    <div className="App flex flex-col items-center justify-center h-screen bg-[#ceff1a] selection:bg-[#070707] selection:text-[#fbfbff]">
      <h1 className="text-[100px] font-bold text-[#39afe5]">Random Joke</h1>
      <p className="text-[#070707] font-bold text-[25]">{joke}</p>
      <button
        className="p-[10px] m-[20px] rounded-lg w-[100px] font-semibold border-2 border-black bg-[#fbfbff] text-[#070707] hover:bg-[#070707] hover:text-[#fbfbff]"
        onClick={async () => {
          setJoke(await fetchRandomJoke());
        }}
      >
        NEW
      </button>
    </div>
  );
}

export default App;
