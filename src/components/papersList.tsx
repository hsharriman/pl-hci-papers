import { NavLink } from "react-router";
import type Paper from "../interfaces/paper";
import { PaperLinks } from "./PaperLinks";

type Props = {
  papers: Paper[];
  keywordFilter: string[];
};
function PapersList({ papers, keywordFilter }: Props) {
  const papersListFiltered = papers.filter((paper: Paper) =>
    keywordFilter.every((keyword) => paper.keywords.includes(keyword))
  );
  const papersToRender =
    keywordFilter.length == 0 ||
    (keywordFilter.length == 1 && keywordFilter[0] == "")
      ? papers
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
                  <div className="text-lg leading-6 font-bold text-wrap text-indigo-500 hover:text-indigo-400">
                    {paper.title}
                  </div>
                </div>
              </NavLink>
              <div className="flex flex-row gap-2 items-baseline mb-1">
                <div className="text-md mb-1 leading-snug italic font-semibold">
                  {paper.author + ";"}
                </div>
                <div className="text-base italic text-portfolio text-accent-1 text-slate-600">
                  {paper.venue}
                </div>
              </div>
              <div className="text-sm mb-1 leading-snug">{paper.summary}</div>
              <div className="text-base mb-1 flex flex-row flex-wrap gap-1 leading-tight">
                Keywords:
                {paper.keywords.map((k, i) => {
                  const comma = i < paper.keywords.length - 1 ? ", " : "";
                  return (
                    <div className="underline underline-offset-2">{`${k}${comma}`}</div>
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
