// src/pages/api/examples.ts
import { TECHNOLOGY } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
    const group: string | string[] | undefined = req?.query?.tech_group;
    const where = {
        tech_group: TECHNOLOGY[group as keyof typeof TECHNOLOGY]
    }
  const examples = await prisma.technology.findMany({where});
  res.status(200).json(examples);
};

export default examples;
