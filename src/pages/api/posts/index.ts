import { getAllPosts, getPosts } from "src/api/posts";
import type { NextApiRequest, NextApiResponse } from "next";

const posts = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req['query']['category']) {
    const category_group: any = req['query']['category'];
    res.status(200).json(await getPosts(category_group));
  } else {
    res.status(200).json(await getAllPosts());
  }
};

export default posts;

