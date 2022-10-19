import { prisma } from "src/server/db/client";
import { getChildrenCategories } from "src/api/category";

export const getPosts = async (category_group: string) => {
  const categories = getChildrenCategories(category_group, true);
  const slugs = (await categories).map((cat) => cat.slug);
  // get all posts with category in categories
  const posts = await prisma.post.findMany({
    where: {
      categories: {
        some: {
          slug: {
            in: slugs,
          },
        },
      },
    },
    include: post_include,
  });
  return posts;
};

export const getAllPosts = async () => {
    return await prisma.post.findMany({include: post_include});
}

export const post_include = {
  categories: {
    select: {
      slug: true,
    },
  },
  author: {
    select: {
      id: true,
      user_name: true,
    },
  },
};
