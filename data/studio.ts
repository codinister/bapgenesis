'use client';

import { defineConfig } from 'sanity';
import { schemaTypes } from '@/data/schemaTypes';
import { structureTool } from 'sanity/structure';

const envs = process.env.NEXT_PUBLIC_PROJECT_ID || '';
const studioConfig = defineConfig({
  projectId: envs,
  dataset: 'production',
  apiVersion: '2024-11-24',
  title: 'BAP GENESIS',
  basePath: '/adminpage',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});

export default studioConfig;
