import { Project, TECHNOLOGY, Technology } from "@prisma/client";
import { getProject, getProjects, ProjectWithTechnologies } from "api/projects";
import { PageContainer } from "components/PageContainer";
import { PageLayout } from "components/PageLayout";
import { getImages } from "components/ProjectImage";
import Status from "components/Status";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import technologies from "pages/api/technologies";

type PageProps = {
  params: {
    project_id: string;
  };
};
export async function getStaticProps({ params }: PageProps) {
  const project = await getProject(params.project_id);
  return {
    props: {
      project,
    },
    revalidate: 5000,
  };
}

const getTechGroupTitle = (tech_group: TECHNOLOGY): string => {
  switch (tech_group) {
    case TECHNOLOGY.DATABASE:
      return "Database";
    case TECHNOLOGY.DEPLOYMENT:
      return "Deployment";
    case TECHNOLOGY.ENVIRONMENT:
      return "Environment";
    case TECHNOLOGY.PLATFORM:
      return "Platforms";
    case TECHNOLOGY.LANGUAGE:
      return "Languages";
    case TECHNOLOGY.SERVICE:
      return "Services";
    case TECHNOLOGY.TOOL:
      return "Tools";
  }
};

export async function getStaticPaths() {
  const projects = await getProjects(false);
  const paths = projects.map((project) => ({
    params: {
      project_id: project.project_id,
    },
  }));
  return { paths, fallback: false };
}

type ProjectPageProps = {
  project: ProjectWithTechnologies;
};

const ProjectTag = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="rounded-md border-2 border-neutral-600 bg-neutral-700 px-3 py-1 shadow-md"
      style={{ minWidth: "200px" }}
    >
      {children}
    </div>
  );
};

const TechStack = ({ technologies }: { technologies: Technology[] }): any => {
  const objects = [];
  for (const tech_group of Object.values(TECHNOLOGY)) {
    const techs = technologies.filter((tech) => tech.tech_group == tech_group);
    if (techs.length > 0) {
      objects.push(
        <ProjectTag key={tech_group}>
          <ul>
            <div className="text-center text-lg font-semibold ">
              {getTechGroupTitle(tech_group)}
            </div>
            <div className="flex w-full flex-col justify-center">
              {techs.map((tech, index) => {
                return (
                  <li
                    className="flex flex-row gap-2 whitespace-nowrap justify-center"
                    key={index}
                  >
                    {tech.icon_url && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tech.icon_url}
                        alt="tech icon"
                        className="w-4"
                      ></img>
                    )}
                    <span>{tech.name}</span>
                  </li>
                );
              })}
            </div>
          </ul>
        </ProjectTag>
      );
    }
  }
  return objects;
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <PageContainer title={project.name}>
      <PageLayout>
        <br />
        <h1 className="text-center text-4xl font-bold">{project.name}</h1>
        <div className="flex justify-center py-3 align-middle">
          <desc className="w-96 rounded-md py-1 px-3 text-center text-neutral-400">
            {project.description}
          </desc>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-x-4 gap-y-2 align-middle flex-wrap">
          <ProjectTag>
            <div className="mb-0.5 flex justify-center">
              <Status status={project.status} />
            </div>
          </ProjectTag>
          {project.repo_url && (
            <ProjectTag>
              <a
                className="relative top-0.5 right-0.5 flex justify-center font-semibold text-sky-500 hover:text-sky-600"
                href={project.repo_url}
              >
                GitHub
              </a>
            </ProjectTag>
          )}
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 py-2">
          <TechStack technologies={project.technologies} />
        </div>
        <div className="mb-2">{getImages(project.project_id)}</div>
        <div className="flex justify-center">
          {project.link_url && (
            <ProjectTag>
              <Link href={project.link_url}>
                <a className="flex justify-center text-center font-semibold text-sky-500 hover:text-sky-600">
                  {project.link_text}
                </a>
              </Link>
            </ProjectTag>
          )}
        </div>
      </PageLayout>
    </PageContainer>
  );
};

export default ProjectPage;
