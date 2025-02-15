import { Cite } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import "@citation-js/plugin-csl";
import "@citation-js/plugin-doi";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { ChangeEvent, FormEvent, useState } from "react";

const dateYear = (date: any) => date["date-parts"]?.[0]?.[0]?.toString();

export const Submit = () => {
  const fields: (
    | "title"
    | "authors"
    | "year"
    | "link"
    | "doi"
    | "abstract"
    | "venue"
    | "keywords"
    | "contributionType"
    | "methods"
  )[] = [
    "title",
    "authors",
    "year",
    "link",
    "doi",
    "abstract",
    "venue",
    "keywords",
    "contributionType",
    "methods",
  ];

  const textAreaFields: ("summary" | "notes")[] = ["summary", "notes"];
  const [inputs, setInputs] = useState({
    bibtex: "",
    title: "",
    authors: "",
    year: "",
    link: "",
    doi: "",
    abstract: "",
    venue: "",
    keywords: "",
    contributionType: "",
    methods: "",
    summary: "",
    notes: "",
  });
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    if (name == "bibtex") {
      Cite.async(event.target.value).then((data: any) => {
        // Format output
        console.log(data?.data[0]);
        console.log(data?.data[0]?.title);
        console.log(dateYear(data?.data[0]?.issued));
        setInputs((values) => ({
          ...values,
          title: data?.data[0]?.title,
          authors: data?.data[0]?.author
            .flatMap((entry: any) => entry.given + " " + entry.family)
            .join(", "),
          year: dateYear(data?.data[0]?.issued),
          link: data?.data[0]?.URL,
          doi: data?.data[0]?.DOI,
          abstract: data?.data[0]?.abstract,
        }));
      });
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="text-black text-left ml-5 mb-5">
      <form onSubmit={handleSubmit}>
        <label>
          (Optional) BibTex Entry: <br></br>
          {/* <textarea className="text-black border-2 w-96 h-96 rounded-sm" name="bibtex" value={inputs.bibtex || ""} onChange={handleChange} /> */}
          <Textarea
            className="text-black border-2 w-96 h-96"
            name="bibtex"
            value={inputs.bibtex || ""}
            onChange={handleChange}
            color="neutral"
            minRows={2}
            size="md"
            variant="soft"
          />
        </label>
        <br></br>
        {fields.map((field) => {
          return (
            <li key={field}>
              <label>
                {field}:
                <Input
                  placeholder="Type in here…"
                  variant="outlined"
                  onChange={handleChange}
                  name={field}
                  value={inputs[field] || ""}
                  className="w-96 border-2"
                />
              </label>
            </li>
          );
        })}
        {textAreaFields.map((field) => {
          return (
            <li key={field}>
              <label>
                {field}:
                <Textarea
                  className="text-black border-2 w-96"
                  name={field}
                  value={inputs[field] || ""}
                  onChange={handleChange}
                  color="neutral"
                  minRows={6}
                  size="md"
                  variant="soft"
                />
              </label>
            </li>
          );
        })}
        <br></br>
        <Button
          className="mb-5"
          onClick={() => {}}
          variant="solid"
          type="submit"
        >
          Submit
        </Button>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};
