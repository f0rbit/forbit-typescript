import { TECHNOLOGY } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getTechnologies } from "src/api/technology";

export const technologies = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // takes in tech_group from query params
  const group: string | string[] | undefined = req?.query?.tech_group;
  const tech_group: TECHNOLOGY | undefined =
    TECHNOLOGY[group as keyof typeof TECHNOLOGY];
  res.status(200).json(await getTechnologies(tech_group));
};

export default technologies;
