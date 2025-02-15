import { NavLink } from "react-router";
import type Paper from "../interfaces/paper";
import "./App.css";
type Props = {
  papers: Paper[];
  keywordFilter: string[];
};
function PapersList({ papers, keywordFilter }: Props) {
  console.log(papers);
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
            <li key={paper.id}>
              <div className="grow items-left text-left md:justify-between pl-5">
                <NavLink to={"/pl-hci-papers/" + paper.url}>
                  <h1 className="text-base/0 text-bold mb-0">
                    <span className="text-base leading-0">{paper.title}</span>
                    &ensp;
                    <a className="text-sm font-light italic text-portfolio text-accent-1">
                      {paper.venue}
                    </a>
                  </h1>

                  <h3 className="text-md font-thin mb-3 leading-snug italic">
                    {paper.author}
                  </h3>
                </NavLink>
                <h4 className="text-sm font-light mb-3 leading-snug max-w-lg">
                  {paper.summary}
                </h4>
                <div className="text-sm">
                  <p>
                    <a
                      href={paper.link}
                      className="underline hover:text-blue-600 duration-200 transition-colors"
                    >
                      PDF
                    </a>
                    &ensp;
                    <a
                      href={paper.doi}
                      className="underline hover:text-blue-600 duration-200 transition-colors"
                    >
                      Link
                    </a>
                  </p>
                  <div className="text-xs">
                    Keywords: {paper.keywords.join(", ")}
                  </div>
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
            </li>
          );
        })}
      </div>
    </>
  );
}

export default PapersList;
