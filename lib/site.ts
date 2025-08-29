// lib/site.ts
export type Site = {
  name: string;
  email: string;
  linkedin: string;
  instagram?: string;
};

const site: Site = {
  name: "Kwon Hyukwoo",
  email: "lyankwon808@gmail.com",
  linkedin: "https://www.linkedin.com/in/hyukwoo-leon-kwon-33190161/",
  instagram: "https://www.instagram.com/leon_h_kwon", // ← 여기!
};

export { site };
export default site;
