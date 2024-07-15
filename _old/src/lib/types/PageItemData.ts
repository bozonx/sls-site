import type {TagItem} from './TagItem';

export interface PageItemData {
  name: string
  title: string
  date?: string
  tags: Record<string, TagItem>
  descr: string
}
