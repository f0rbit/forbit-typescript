// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "src/api/category";
import { prisma } from "src/server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getCategories());
};

export default examples;
