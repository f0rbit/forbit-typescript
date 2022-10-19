import { TECHNOLOGY } from "@prisma/client";
import { prisma } from "src/server/db/client";

export const getTechnologies = async (group: TECHNOLOGY | undefined) => {
  return await prisma.technology.findMany({
    where: {
      tech_group: group,
    },
  });
};
