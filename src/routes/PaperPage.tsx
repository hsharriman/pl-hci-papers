import PaperType from "../interfaces/paper";

export const PaperPage = (paper: PaperType) => {
  return (
    <div className="w-full h-auto mt-16 flex justify-center align-top">
      <div className="max-w-3xl border-l-2 border-r-2 border-slate-500">
        <h1 className="text-3xl font-bold">{paper.title}</h1>
        <h3>{paper.author}</h3>
        <div className="">
          {paper.keywords}
          {/* {paper.tags.map((tag) => (
        <span className="mr-2">#{tag}</span>
      ))} */}
        </div>
        <div>
          <a href={paper.link}>Link to paper</a>
        </div>
        <div>
          {paper.contributionType} | {paper.methods}
        </div>
        <p className="">{paper.notes}</p>
      </div>
    </div>
  );
};
