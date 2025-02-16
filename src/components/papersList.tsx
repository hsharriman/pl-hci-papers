import { NavLink } from "react-router";
import type Paper from "../interfaces/paper";
import { PaperLinks } from "./PaperLinks";

interface PaperListProps {
  papers: Paper[];
  keywordFilter: string[];
  onClickKeyword: (keyword: string) => void;
}
function PapersList(props: PaperListProps) {
  const papersListFiltered = props.papers.filter((paper: Paper) =>
    props.keywordFilter.every(
      (keyword) =>
        paper.keywords.filter((k) => k.startsWith(keyword)).length > 0
    )
  );
  const papersToRender =
    props.keywordFilter.length === 0 ||
    (props.keywordFilter.length === 1 && props.keywordFilter[0] === "")
      ? props.papers
      : papersListFiltered;

  // sort list by date?
  return (
    <>
      <div className="text-black">
        {papersToRender.map((paper) => {
          return (
            <div
              className="flex flex-col flex-wrap mt-4 max-w-[700px]"
              key={paper.id}
            >
              <NavLink to={"/" + paper.url}>
                <div className="flex flex-row gap-2 items-baseline mb-1">
                  <div className="text-md leading-snug md:text-lg md:leading-6 font-bold text-wrap text-indigo-500 hover:text-indigo-400">
                    {paper.title}
                  </div>
                </div>
              </NavLink>
              <div className="md:flex md:flex-row md:gap-2 md:items-baseline mb-1">
                <div className="text-base md:text-md md:mb-1 leading-snug italic font-semibold">
                  {paper.author + ";"}
                </div>
                <div className="text-base italic text-portfolio text-accent-1 text-slate-600">
                  {paper.venue}
                </div>
              </div>
              <div className="text-sm mb-1 leading-snug hidden md:inline">
                {paper.summary}
              </div>
              <div className="text-sm md:text-base mb-1 flex flex-row flex-wrap gap-1 leading-tight">
                Keywords:
                {paper.keywords.map((k, i) => {
                  const comma = i < paper.keywords.length - 1 ? ", " : "";
                  return (
                    <div
                      className="underline underline-offset-2"
                      onClick={() => props.onClickKeyword(k)}
                    >{`${k}${comma}`}</div>
                  );
                })}
              </div>
              <div className="text-base">
                <PaperLinks {...paper} />
              </div>
              {/* <div className="mb-2 text-left">
                        <div className="text-2xl">
                            {paper.title}
                        </div>
                        <div className="text-sm">
                            {paper.author}
                        </div>
                        <div className="text-sm">
                            {paper.keywords.join(", ")}
                        </div>
                    </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PapersList;
