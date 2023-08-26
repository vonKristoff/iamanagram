import { getCollection } from "astro:content";
import type { LayoutProps } from '../components/types';

type Data = {
  data: LayoutProps | null
}

/**
 * notes from discord
 * If you are within [pagename].astro, and you are already iterating through the result of getCollection() within getStaticPaths(), you can also pass the actual entry directly via the props.
 */

export async function getProps(target: string): Promise<any> {
  const [pagename] = target.split('/').pop()?.split('.') || ''
  const projectList = await getCollection("projects");
  const result = projectList.find(({ slug }) => slug === pagename)
  // console.log(pagename, result)
  return result ? result.data : {}
}