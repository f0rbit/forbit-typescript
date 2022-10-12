import { TECHNOLOGY } from "@prisma/client";
import { prisma } from "server/db/client";

export const getTechnologies = async (group: TECHNOLOGY | undefined) => {
  return await prisma.technology.findMany({
    where: {
      tech_group: group,
    },
  });
};
