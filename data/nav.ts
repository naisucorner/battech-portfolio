interface Nav {
  name: string;
  path: string;
  children?: string[];
}

const listNav: Nav[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Roadmap",
    path: "/roadmap",
  },
  {
    name: "Battech Team",
    path: "/battech-team",
  },
  {
    name: "Media & News",
    path: "/media-news",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default listNav;
