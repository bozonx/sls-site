export interface PageMetaData {
  // generated params
  // url friendly name. Without slash at the start
  name: string
  dateLocal?: string
  thumbUrl?: string

  // page meta
  title: string
  descr: string
  date?: string
  tags: string[]
  commentUrl?: string
  videoLink?: string
  podcasts?: Record<string, string>
}
