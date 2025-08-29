// lib/site.ts
export type Site = {
  name: string;
  email: string;
  linkedin: string;   // ← ? 제거
  instagram?: string;  // ← ? 제거
};

const site: Site = {
  name: "Kwon Hyukwoo",
  email: "lyankwon808@gmail.com",
  linkedin: "https://www.linkedin.com/in/hyukwoo-leon-kwon-33190161/",
  instagram: "https://instagram.com/leon_h_kwon",
};

export default site;
