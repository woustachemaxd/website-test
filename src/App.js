import React, { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [isPC, setIsPC] = useState(true);

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
    const userAgent = window.navigator.userAgent;
    setIsPC(userAgent.includes("Windows") || userAgent.includes("Macintosh"));
  }, []);

  if (!isPC) {
    return (
      <div className="bg-black w-screen h-screen">
        <p className="pt-[300px] font-offBitDotNormal text-center text-white text-[45px]">
          Please use a PC to view this content.
        </p>
      </div>
    );
  }

  return (
    <div className="App flex flex-col items-center justify-center h-screen bg-[#000000] selection:bg-[#070707] selection:text-[#fbfbff]">
      <h1 className="text-[270px] font-offBitDotBold text-[#ffffff]">
        Random Joke
      </h1>
      <p className="text-[#39afe5] font-offBitDotNormal text-center text-[50px]">
        {joke}
      </p>
      <button
        className="p-[10px] m-[20px] rounded-lg w-[100px] font-semibold border-2 border-[#ceff1a] bg-black text-[#ceff1a] hover:bg-[#ceff1a] hover:text-black"
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
