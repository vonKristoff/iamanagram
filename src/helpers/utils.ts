import { getCollection } from "astro:content";
import type { LayoutProps } from '../components/types';

type Data = {
  data: LayoutProps | null
}
export async function getProps(target: string): Promise<any> {
  const projectList = await getCollection("projects");
  const result = projectList.find(({ slug }) => slug === target)
  return result ? result.data : {}
}