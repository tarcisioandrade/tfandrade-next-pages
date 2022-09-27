export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "ProjectTitle",
      description: "Title of the Project",
      type: "string",
    },
    {
      name: "projectImage",
      title: "ProjectImage",
      type: "image",
      description: "Resolution Preference 1029x625",

      options: {
        hotspot: true,
      },
    },
    {
      name: "projectLink",
      title: "ProjectLink",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
  ],
};
