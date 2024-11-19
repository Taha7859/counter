"use client";
import { useState } from "react";

export default function Home() {
  let [Counter, setCounter] = useState(5);

  function handleClick() {
    if (Counter < 10) {
      setCounter(Counter + 1);
    }

 
  }

  function Remove(){
    if(Counter>=1){
      setCounter(Counter-1)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 mt-10  ">
      <h1 className="text-2xl font-bold">Counter:{Counter}</h1>
      <button onClick={handleClick} className="font-semibold text-lg  border-2 border-black rounded-md text-black hover:bg-blue-700 hover:text-white p-2">Add value </button>
      <br/>
      <button onClick={Remove} className="font-semibold text-lg  border-2 border-black rounded-md text-black hover:bg-blue-700 hover:text-white p-2">remove value </button>
    </div>
  );
}