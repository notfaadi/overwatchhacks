export type BlogSection = {
  heading: string
  body: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  /** Backend search index — all target keywords for this guide (not shown as a public list). */
  searchTerms: string
  date: string
  readMinutes: number
  tag: string
  sections: BlogSection[]
  howTo?: boolean
}
