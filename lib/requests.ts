import { NextApiRequest } from "next";
export function getLista(){
    const arr = Array.from(Array(10000).keys());

    return arr.map((valor)=>{
        return {
            nombre: valor,
        }
    })
}
export function getOffsetAndLimitFromReq(req: NextApiRequest, maxLimit:any, maxOffset:any){
    const queryLimit = parseInt(req.query.limit as string);
    const queryOffset = parseInt(req.query.offset as string);
    const limit = queryLimit <= maxLimit ? queryLimit : maxLimit; 
    const offset = queryOffset < maxOffset ? queryOffset : 0;
    return {limit, offset}
}