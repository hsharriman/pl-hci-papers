import { useState } from "react";
import PapersList from "../components/papersList";
import PaperType from "../interfaces/paper";

export interface HomeProps {
  papers: PaperType[];
}
export const Home = (props: HomeProps) => {
  const [keywords, setKeywords] = useState([""]);

  const onClickKeyword = (keyword: string) => {
    if (keywords.includes(keyword)) {
      setKeywords(keywords.filter((k) => k !== keyword));
    } else {
      setKeywords([...keywords, keyword]);
    }
  };
  return (
    <div className="mt-4 flex justify-center flex-wrap flex-row pl-2 md:pl-0 pr-2 md:pr-0">
      <div className="w-full flex justify-center">
        <label className="text-black">
          Filter by keyword separated by commas:&ensp;
          <input
            className="border-2 border-indigo-300 rounded-lg w-[300px] md:w-[400px] px-2 py-1"
            value={keywords
              .filter((k, i) => i === keywords.length - 1 || k !== "")
              .join(",")}
            onChange={(e) => setKeywords(e.target.value.split(","))}
          />
        </label>
      </div>
      <PapersList
        papers={props.papers}
        keywordFilter={keywords}
        onClickKeyword={onClickKeyword}
      />
    </div>
  );
};
