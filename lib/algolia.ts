import { searchClient } from "@algolia/client-search";

const ALGOLIA_FIRST_API_KEY = process.env.ALGOLIA_FIRST_API_KEY as string;
const ALGOLIA_SECOND_API_KEY = process.env.ALGOLIA_SECOND_API_KEY as string;

export const client = searchClient(ALGOLIA_FIRST_API_KEY, ALGOLIA_SECOND_API_KEY)