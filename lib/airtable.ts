import Airtable from "airtable";
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY as string;
const AIRTABLE_BASE = process.env.AIRTABLE_BASE as string;

 export const airtableDB = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE);