import { Category } from "@prisma/client";
import { prisma } from "src/server/db/client";

export const getCategories = async () => {
  return await prisma.category.findMany();
};

export const getChildrenCategories = async (parent_slug: string | undefined, include_parent: boolean) => {
    const data = await prisma.category.findMany();
    const children_names: string[] = [];
    const children_objects: Category[] = [];

    const addCategory = (category: Category) => {
            children_names.push(category.slug);
            children_objects.push(category);
    }
    for (const category of data) {
        if (include_parent && category.slug == parent_slug) addCategory(category);
        if (category.parent_slug == parent_slug || (category.parent_slug && children_names.includes(category.parent_slug))) {
            addCategory(category);
        }
    }

    return children_objects;
}