// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getChildrenCategories } from "api/category";
import { prisma } from "server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
    const { category_group }: any = req.query;
    const categories = getChildrenCategories(category_group, true);
    const slugs = (await categories).map((cat) => cat.slug);
    // get all posts with category in categories
    const posts = await prisma.post.findMany({
        where: {
            categories: {
                some: {
                    slug: {
                        in: slugs
                    }
                }
            }
        }
    });
    res.status(200).json(posts);
};

export default examples;