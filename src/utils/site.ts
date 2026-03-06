const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Youssef | Software Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    instagram: "https://www.instagram.com/petod24737/",
    linkedin: "https://www.linkedin.com/in/youssef-abdelhamid-bb2023215",
    facebook: "https://www.facebook.com/share/15b4gJrzpHJ/",
    github: "https://github.com/YoussefAbdelhamidd",
  },
  mailSupport: "youssefabdelhamid041@gmail.com",
};
