import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import projects from "./projects";
import skill from "./skill";
import social from "./social";
import tag from "./tag";
import { localeString, localeText } from "./locales";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    pageInfo,
    projects,
    skill,
    social,
    tag,
    localeString,
    localeText
  ]),
});
