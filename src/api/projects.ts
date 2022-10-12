import { Prisma, Project, Technology } from "@prisma/client";
import { prisma } from "server/db/client";

const project_include: Prisma.ProjectInclude = {
    technologies: true
}

export declare type ProjectWithTechnologies = Project & { technologies: Technology[] }

export const getProjects = async (hide_hidden: boolean) => {
  let args: Prisma.ProjectFindManyArgs = { include: project_include };
  if (hide_hidden) {
    args = {
      where: {
        hidden: { equals: false },
      },
      include: project_include
    };
  }
  return await prisma.project.findMany(args);
};

export const getProject = async(project_id: string) => {
    return await prisma.project.findUnique({
        where: {
            project_id: project_id
        },
        include: project_include
    });
}