import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  title: 's-jinja-studio',
  projectId: 'm0hbf769',
  dataset: 'production',
  apiVersion: "2023-06-27",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config;
