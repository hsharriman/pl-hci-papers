import { useState } from "react";
import "./App.css";
import papersJSON from "./assets/papers.json"
import PapersList from "./papersList";
import Layout from "./layout";
function App() {
  const [keywords, setKeywords] = useState([""])
  const papers = papersJSON.papers.map(paper => {return {...paper, id : crypto.randomUUID()} })

  return (
    <>
    <Layout>
    <div>
      <label className="text-black">
        Keyword Filter:&ensp;
        <input name="myInput" className="border-2 rounded-xl"value={keywords} onChange={e => setKeywords(e.target.value.replace(' ',"").split(","))}/>
      </label>
        <PapersList papers={papers} keywordFilter={keywords}/>
      </div>
      </Layout>
    </>
  );
}

export default App;
