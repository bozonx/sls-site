export interface PageMetaData {
  // url friendly name. Without slash at the start
  name: string
  title: string
  tags: string[]
  descr: string
  date?: string
  commentUrl?: string
  videoLink?: string
}
