import { getCollection } from "astro:content";
import { LayoutProps } from '../components/types'
interface Data {
  data: LayoutProps
}
export const getProps = async (target: string) => {
  const projectList = await getCollection("projects");
  return projectList.find(({ slug }) => slug === target) as Data
}