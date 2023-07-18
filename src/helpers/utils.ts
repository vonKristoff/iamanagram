import { getCollection } from "astro:content";
import type { LayoutProps } from '../components/types';

interface Data {
  data: LayoutProps
}
export async function getProps(target: string) {
  const projectList = await getCollection("projects");
  return projectList.find(({ slug }) => slug === target) as Data
}