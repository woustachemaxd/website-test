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
    <div className="App flex flex-col items-center justify-center h-screen">
      <h1 className="text-[100px] font-bold text-[#628395]">Random Joke</h1>
      <p className="text-[#070707] font-bold text-[30px]">{joke}</p>
    </div>
  );
}

export default App;
