import { getCollection } from "astro:content";
import type { LayoutProps } from '../components/types';

type Data = {
  data: LayoutProps | null
}
export async function getProps(target: string): Promise<any> {
  const [pagename] = target.split('/').pop()?.split('.') || ''
  const projectList = await getCollection("projects");
  const result = projectList.find(({ slug }) => slug === pagename)
  return result ? result.data : {}
}