import type {TagItem} from './TagItem';


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
  tags: Record<string, TagItem>
  commentUrl?: string
  videoLink?: string
  podcasts?: Record<string, string>
}
