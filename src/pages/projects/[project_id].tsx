import { Project } from "@prisma/client";
import { getProject, getProjects } from "api/projects";

type PageProps = {
    params: {
        project_id: string
    }
}
export async function getStaticProps({ params }: PageProps) {
  const project = await getProject(params.project_id);
  return {
    props: {
      project,
    },
    revalidate: 5000,
  };
}

export async function getStaticPaths() {
    const projects = await getProjects(false);
    const paths = projects.map(project => ({
        params: {
            project_id: project.project_id
        }
    }));
    return { paths, fallback: false }
}

type ProjectPageProps = {
    project: Project
}
const ProjectPage = ({ project }: ProjectPageProps) => {
    return <div>
        <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
}

export default ProjectPage;