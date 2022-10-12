// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.post.findMany({include: {
    categories: {
      select: {
        slug: true
      }
    },
    author: {
      select: {
        id: true,
        user_name: true
      }
    },
  }});
  res.status(200).json(examples);
};

export default examples;
