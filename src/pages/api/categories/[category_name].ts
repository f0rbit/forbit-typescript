// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getChildrenCategories } from "api/category";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
    const { category_name, include_parent }: any = req.query;
  res.status(200).json(await getChildrenCategories(category_name, include_parent == "true" || typeof include_parent === "undefined"));
};

export default examples;