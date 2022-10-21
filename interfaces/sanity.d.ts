interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  intro: string;
  avatarImage: Image;
  skills: Skill[];
  socials: Social[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  slug: string;
  title: string;
}

export interface Tag extends SanityBody {
  _type: "tag";
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  link: string;
  title: string;
}

export interface Project extends SanityBody {
  _type: "projects";
  projectLink: string;
  projectTitle: string;
  projectImage: Image;
  tags: Tag[];
}
