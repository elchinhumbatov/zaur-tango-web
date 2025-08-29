import { MetadataRoute } from "next";

const baseUrl = 'https://zaur.tango.com';
const urls : string[] = [
  baseUrl,
  baseUrl + '/courses',
  baseUrl + '/courses/beginner',
  baseUrl + '/courses/intermediate',
  baseUrl + '/courses/advanced',
  baseUrl + '/about',
  baseUrl + '/contact',
  baseUrl + '/login',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...urls.map((url, idx) => ({
      url,
      lastModified: new Date(),
      priority: idx === 0 ? 1.0 : 0.8,
    })),
  ];
}
