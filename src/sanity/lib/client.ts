import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:  '412zp03j',
  dataset: "production",
  apiVersion: '2025-01-13',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
