import { UUID } from "crypto";

type PaperType = {
  id: UUID;
  url: string; // for use within the website, following pattern of "{1st author surname}-{trimmed-paper-title}"
  // Info
  title: string;
  date: string;
  year: number;
  author: string;
  venue: string;
  link: string;
  doi: string;
  keywords: string[];

  // Info to display in the paper detail view
  summary: string; //1-2 sentence high-level, why is this paper really cool?
  contributionType: string;
  abstract?: string;
  methods: string;
  notes?: string; //any extra info to display in the body of the detail, quotes, discussion, etc
};

export default PaperType;
