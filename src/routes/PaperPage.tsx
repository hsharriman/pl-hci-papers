import { ReactNode } from "react";
import { PaperLinks } from "../components/PaperLinks";
import PaperType from "../interfaces/paper";

const metadataSection = (header: string, body: string | ReactNode) => {
  return (
    <div className="text-lg flex flex-row gap-1">
      <div className="font-semibold">{header}</div>
      {body}
    </div>
  );
};

export const PaperPage = (paper: PaperType) => {
  return (
    <div className="w-full h-auto pt-4 flex justify-center align-top">
      <div className="max-w-[900px] w-full">
        <h1 className="text-3xl font-bold text-slate-700 mb-2">
          {paper.title}
        </h1>
        <div className="text-2xl font-semibold text-indigo-500 mb-6">
          {paper.author}
        </div>
        <div className="text-2xl text-slate-500">Metadata</div>
        <div className="flex flex-row flex-wrap gap-x-6">
          {metadataSection("Available links:", <PaperLinks {...paper} />)}
          {metadataSection("Year published:", paper.year)}
          {metadataSection("Research method(s):", paper.methods)}
          {metadataSection("Contribution type(s):", paper.contributionType)}
        </div>
        <div className="flex flex-row gap-2 flex-wrap text-lg mb-6">
          <div className="font-semibold">Keywords:</div>
          {paper.keywords.join(", ")}
        </div>
        <div className="text-slate-500 text-2xl">Summary</div>
        <div className="mb-6">{paper.summary}</div>
        {paper.abstract && (
          <div>
            <div className="text-slate-500 text-2xl">Abstract</div>
            <div>{paper.abstract}</div>
          </div>
        )}
        {/* <p className="">{paper.notes}</p> */}
      </div>
    </div>
  );
};
