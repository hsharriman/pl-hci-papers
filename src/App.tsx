import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import papersJSON from "./assets/papers.json";
import PaperType from "./interfaces/paper";
import { BaseContent } from "./routes/BaseContent";
import { Home } from "./routes/Home";
import { PaperPage } from "./routes/PaperPage";
import { Submit } from "./routes/Submit";
import { stripPunctuation } from "./utils";
function App() {
  const papers: PaperType[] = papersJSON.papers.map((p) => {
    return {
      ...p,
      id: crypto.randomUUID(),
      url: `${stripPunctuation(p.author.split(" ")[0])}-${
        p.year
      }`.toLowerCase(), // TODO replace with cleaned paper title
    };
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="pl-hci-papers" />} />
          <Route path="pl-hci-papers" element={<BaseContent />}>
            <Route index element={<Home papers={papers} />} />
            {papers.map((p) => (
              <Route path={p.url} element={<PaperPage {...p} />} />
            ))}
            <Route path="submit" element={<Submit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
