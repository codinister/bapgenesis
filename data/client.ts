import { createClient } from "@sanity/client";



const client = createClient({
    projectId: process.env.NEXT_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-11-24',
    useCdn: true
})

export default client