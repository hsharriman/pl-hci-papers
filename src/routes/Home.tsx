import { useState } from "react";
import PapersList from "../components/papersList";
import PaperType from "../interfaces/paper";

export interface HomeProps {
  papers: PaperType[];
}
export const Home = (props: HomeProps) => {
  const [keywords, setKeywords] = useState([""]);

  return (
    <div className="mt-4 flex justify-center flex-wrap flex-row">
      <div className="w-full flex justify-center">
        <label className="text-black">
          Filter by Keyword:&ensp;
          <input
            name="myInput"
            className="border-2 border-indigo-300 rounded-lg w-[400px] px-2 py-1"
            value={keywords}
            onChange={(e) =>
              setKeywords(e.target.value.replace(" ", "").split(","))
            }
          />
        </label>
      </div>
      <PapersList papers={props.papers} keywordFilter={keywords} />
    </div>
  );
};
