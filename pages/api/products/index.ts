import type { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFromReq } from "../../../lib/requests";

export default async function (req: NextApiRequest, res: NextApiResponse){
    console.log(req.query.search);
    const results = 0;
    res.send(results)
}