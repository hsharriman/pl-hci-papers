import PaperType from "../interfaces/paper";

export const PaperLinks = (paper: PaperType) => {
  const linkCSS =
    "font-semibold text-indigo-500 hover:text-indigo-300 duration-200 transition-colors";
  return (
    <div className="flex flex-row">
      {paper.link && (
        <a href={paper.link} className={linkCSS}>
          [PDF]
        </a>
      )}
      &ensp;
      {paper.doi && (
        <a href={paper.doi} className={linkCSS}>
          [DOI Link]
        </a>
      )}
    </div>
  );
};
