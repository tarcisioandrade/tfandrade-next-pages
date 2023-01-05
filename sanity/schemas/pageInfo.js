export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "localeString",
    },
    {
      name: "intro",
      title: "Intro",
      type: "localeText",
    },
    {
      name: "avatarImage",
      title: "Image",
      description: "Resolution Preference 600x600",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "curriculum",
      title: "Curriculum",
      type: "file"
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
