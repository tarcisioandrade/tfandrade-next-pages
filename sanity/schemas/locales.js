const supportedLanguages = [
  { id: "pt", title: "Português", isDefault: true },
  { id: "en", title: "English" },
];

export const localeString = {
  title: "Localized string",
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],

  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
};

export const localeText = {
  title: "Localized text",
  name: "localeText",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],

  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "text",
    fieldset: lang.isDefault ? null : "translations",
  })),
};
