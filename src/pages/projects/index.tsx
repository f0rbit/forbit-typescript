import ProjectCard from "components/ProjectCard";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import Link from "next/link";
import { getProjects, ProjectWithTechnologies } from "api/projects";

export async function getStaticProps() {
  const projects = await getProjects(true);
  return {
    props: {
      projects,
    },
    revalidate: 5000,
  };
}

function renderProjects(projects: ProjectWithTechnologies[]) {
  const objects = [];
  for (const project of projects) {
    objects.push(<ProjectCard project={project} key={project.project_id} />);
  }
  return objects;
}

type ProjectType = {
  projects: ProjectWithTechnologies[];
};
export default function projects({ projects }: ProjectType) {
  return (
    <div className="h-max min-h-screen bg-neutral-800 w-screen min-w-max">
      <Head>
        <title>forbit.dev | Projects</title>
      </Head>
        <div className="fixed w-full z-10">
        <NavBar noicon={false} />
      </div>
      <div className="h-16" />
      <h1 className="py-4 text-center text-4xl font-bold text-white">
        Projects
      </h1>
      {projects ? (
        <div className="mx-auto grid w-max grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
          {renderProjects(projects)}
        </div>
      ) : (
        <div className="mt-8 flex items-center justify-center">
          <div className="w-max rounded-md bg-red-400 py-1 px-4 text-center font-mono font-bold text-red-100 ">
            Internal Server Error
            <div className="font-mono text-xs text-red-200">
              {"Couldn't reach API"}
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
