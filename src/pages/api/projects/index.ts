// src/pages/api/examples.ts
import { getProjects } from "api/projects";
import type { NextApiRequest, NextApiResponse } from "next";

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getProjects(true));
};

export default projects;
