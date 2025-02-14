import { UUID } from "crypto";

type PaperType = {
    id: UUID
    // Info 
    title: string
    date: string
    author: string
    venue: string
    link: string
    doi:string
    keywords: string[]

    // Info to display in the paper detail view
    summary: string //1-2 sentence high-level, why is this paper really cool?
    contributionType:string
    abstract?:string
    methods:string
    notes?: string //any extra info to display in the body of the detail, quotes, discussion, etc
  }
  
  export default PaperType