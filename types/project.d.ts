type Project = {
  id?: string;
  title: string;
  category: string;
  description: string;
  tech: ProjectTech[];
  website: string;
  repository?: string;
  image: ProjectImage;
};

type ProjectImage = {
  srcSet: string;
  src: string;
  alt: string;
  lqip: string;
};

type ProjectTech = {
  title: string;
  icon: JSX.Element;
};