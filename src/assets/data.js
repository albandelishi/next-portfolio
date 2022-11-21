const data = {
  home: {
    header: "Hi! I am Joe",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    consoleText: "John Doe",
  },
  socialLinks: {
    linkedIn: "https://linkedin.com/in/",
    github: "https://github.com/",
  },
  services: [
    {
      id: 1,
      title: "Frontend Dev",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      iconSource: "/images/frontend.png",
      iconAlt: "Frontend Dev",
    },
    {
      id: 2,
      title: "Backend Dev",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      iconSource: "/images/backend.png",
      iconAlt: "Backend Dev",
    },
    {
      id: 3,
      title: "Wordpress Dev",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      iconSource: "/images/wordpress.png",
      iconAlt: "Wordpress Dev",
    },
  ],
  tools: {
    firstRow: [
      { id: 1, src: "/images/tools/html.svg", alt: "HTML" },
      { id: 2, src: "/images/tools/css.svg", alt: "CSS" },
      { id: 3, src: "/images/tools/bootstrap.svg", alt: "Bootstrap" },
      { id: 4, src: "/images/tools/javascript.svg", alt: "JavaScript" },
      { id: 5, src: "/images/tools/react.svg", alt: "ReactJS" },
      { id: 6, src: "/images/tools/php.svg", alt: "PHP" },
    ],
    secondRow: [
      { id: 7, src: "/images/tools/node.svg", alt: "NodeJS" },
      { id: 8, src: "/images/tools/express.svg", alt: "ExpressJS" },
      { id: 9, src: "/images/tools/mysql.svg", alt: "MySQL" },
      { id: 10, src: "/images/tools/git.svg", alt: "Git" },
      { id: 11, src: "/images/tools/docker.svg", alt: "Docker" },
      { id: 12, src: "/images/tools/aws.svg", alt: "AWS" },
      { id: 13, src: "/images/tools/jira.svg", alt: "Jira" },
    ],
  },
  projects: [
    {
      id: 1,
      title: "Project 1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      src: "/images/projects/project.png",
      alt: "Project 1",
      link: "#",
      linkTitle: "website",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      src: "/images/projects/project.png",
      alt: "Project 2",
      link: "#",
      linkTitle: "website",
    },
    {
      id: 3,
      title: "Project 3",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
      src: "/images/projects/project.png",
      alt: "Project 3",
      link: "#",
      linkTitle: "website",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      src: "/images/projects/project.png",
      alt: "Project 4",
      link: "#",
      linkTitle: "website",
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      src: "/images/projects/project.png",
      alt: "Project 5",
      link: "#",
      linkTitle: "website",
    },
    {
      id: 6,
      title: "Project 6",
      description: `CIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
      src: "/images/projects/project.png",
      alt: "Project 6",
      link: "#",
      linkTitle: "website",
    },
  ],
  contact: {
    mapImage: "images/map.svg",
    location: "New York",
    email: "john@website.com",
    github: {
      link: "#",
      username: "John",
    },
    linkedIn: {
      link: "#",
      username: "John",
    },
  },
  footer: {
    author: "John Doe",
  },
};
export default data;
