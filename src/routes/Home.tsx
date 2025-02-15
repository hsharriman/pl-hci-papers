import { useState } from "react";
import PapersList from "../components/papersList";
import PaperType from "../interfaces/paper";

export interface HomeProps {
  papers: PaperType[];
}
export const Home = (props: HomeProps) => {
  const [keywords, setKeywords] = useState([""]);

  return (
    <div>
      <label className="text-black">
        Keyword Filter:&ensp;
        <input
          name="myInput"
          className="border-2 rounded-xl"
          value={keywords}
          onChange={(e) =>
            setKeywords(e.target.value.replace(" ", "").split(","))
          }
        />
      </label>
      <PapersList papers={props.papers} keywordFilter={keywords} />
    </div>
  );
};
