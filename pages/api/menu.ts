import type { NextApiRequest, NextApiResponse } from "next";
import { AllData } from "./menuData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let { test } = req.query;
    // console.log("test: ", test);
    res.status(200).json(AllData);
}
