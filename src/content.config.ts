import { defineCollection, z } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

const docs = defineCollection({
  schema: docsSchema({
    extend: z.object({
      // Add any custom frontmatter fields here
    })
  })
})

export const collections = { docs }

