import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio-real',

  projectId: '49zyr5t0',
  dataset: 'portfolioreal',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
