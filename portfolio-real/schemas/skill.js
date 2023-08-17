import {Rulemin} from './validation' 

export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: "title",
        title: "Title",
        description: "Title of skill",
        type: "string",
      },
      {
        name: "progress",
        title: "Progress",
        type: "number",
        description: "Progress of skill from 0 to 100%",
      },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
      hotspot: true,
      },
     },
   ],
  }
  