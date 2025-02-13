import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import fs from 'fs'
import papersJSON from "./assets/papers.json"
import Header from "./header";
import Footer from "./footer";
import PapersList from "./papersList";
function App() {
  const [count, setCount] = useState(0);

  // fetch(yaml_raw)
  // .then(r => r.text())
  // .then(text => {
  //   console.log(text)
  // })
  const [keywords, setKeywords] = useState([""])
  const papers = papersJSON.papers
  console.log(JSON.stringify(papersJSON))
  // const keywordFilter:string[] = []
  return (
    <>
    <div className="min-h-screen flex justify-center">
      <div className="max-w-4xl bg-slate-200 ">
      <Header />
      <div>
      <label className="text-black">
        Keyword Filter: 
        <input name="myInput" value={keywords} onChange={e => setKeywords(e.target.value.split(","))}/>
      </label>
        <PapersList papers={papers} keywordFilter={keywords}/>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
