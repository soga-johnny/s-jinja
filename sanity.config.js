import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  title: 's-jinja-studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  apiVersion: "2023-06-27",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config;
