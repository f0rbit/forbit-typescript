import Status from "src/components/Status";
import Image from "next/image";

import dark_dungeon from "public/assets/project_icons/dark_dungeon.png";
import bit_quest from "public/assets/project_icons/bit_quest.png";
import pixel_fly from "public/assets/project_icons/pixel_fly.png";
import forbit_dev from "public/assets/project_icons/forbit_dev.png";
import gm_server from "public/assets/project_icons/gm_server.png";
import dungeon_generator from "public/assets/project_icons/dungeon_generator.png";
import arena_icon from "public/assets/project_icons/arena_icon.png";
import { ProjectWithTechnologies } from "src/api/projects";
import Icon from "src/components/Icons";
import { TECHNOLOGY } from "@prisma/client";
import Link from "next/link";

function getIcon(project: ProjectWithTechnologies) {
  switch (project["icon_url"]) {
    case "dark_dungeon.png":
      return (
        <div className="mt-1.5 -ml-2">
          <Image width={55} height={55} src={dark_dungeon} alt="Project Icon" />
        </div>
      );
    case "bit_quest.png":
      return (
        <div className="-ml-4 mt-2">
          <Image width={90} height={45} src={bit_quest} alt="Project Icon" />
        </div>
      );
    case "pixel_fly.png":
      return (
        <div className="mr-1 -ml-2">
          <Image width={27} height={42} src={pixel_fly} alt="project icon" />
        </div>
      );
    case "forbit_dev.png":
      return (
        <div className="mt-3 -ml-1 mr-1">
          <Image width={80} height={80} src={forbit_dev} alt="project icon" />
        </div>
      );
    case "gm_server.png":
      return (
        <div className="mt-2 -ml-1">
          <Image width={60} height={30} src={gm_server} alt="project icon" />
        </div>
      );
    case "dungeon_generator.png":
      return (
        <div className="-mr-2 ml-1 mt-1">
          <Image
            width={60}
            height={60}
            src={dungeon_generator}
            alt="project icon"
          />
        </div>
      );
    case "arena_icon.png":
      return (
        <div className="-ml-2">
          <Image width={60} height={60} src={arena_icon} alt="project icon" />
        </div>
      );
    default:
      return null;
  }
}

function getLink(project: ProjectWithTechnologies) {
  let _link = project["link_url"] ?? "";
  let _text = project["link_text"] ?? "";
  if (project.repo_url) {
    _link = project.repo_url;
    _text = "GitHub";
  }

  return _link ? (
    <a
      className="relative top-[2px] font-semibold text-sky-500 hover:text-sky-600"
      href={_link}
    >
      {_text}
    </a>
  ) : null;
}

function getLinkObject(project: ProjectWithTechnologies) {
  const _link = getLink(project);
  if (_link) {
    return (
      <div className="h-full w-max rounded-md border-2 border-neutral-600 bg-neutral-700 py-2 px-3 shadow-md">
        {getLink(project)}
      </div>
    );
  } else {
    return null;
  }
}

function renderLanguages(project: ProjectWithTechnologies) {
  return project.technologies
    .filter((tech) => tech.tech_group == TECHNOLOGY.LANGUAGE)
    .map((tech) => (
      <Icon technology={tech} key={project.name + "_" + tech.name} />
    ));
}

export default function ProjectCard({ project }: { project: ProjectWithTechnologies }) {
  return (
    <div className="w-96 rounded-md border-2 border-neutral-700 bg-neutral-800 py-5 px-5 shadow-md">
      <div className="text-white">
        <div className="min-w-min rounded-2xl border-2 border-neutral-600 bg-neutral-700 px-5 py-2 shadow-xl">
          <Link href={"projects/" + project.project_id}>
            <a>
              <span className="align-center flex h-12 items-center justify-center gap-2">
                {getIcon(project) ? (
                  <div style={{ imageRendering: "pixelated" }}>
                    {getIcon(project)}
                  </div>
                ) : (
                  <></>
                )}
                <h1 className="text-center text-2xl font-bold hover:text-sky-600">
                  {project["name"]}
                </h1>
              </span>
            </a>
          </Link>
        </div>
        <br />
        <p className="text-md p-2 text-center font-sans font-light text-neutral-300">
          {project["description"]}
        </p>
        <br />
        <br />

        <div className="flex h-12 flex-row flex-wrap items-center justify-center gap-4">
          <div className="h-full w-min rounded-md border-2 border-neutral-600 bg-neutral-700 px-3 py-2 shadow-md">
            <Status status={project["status"]} />
          </div>
          {getLinkObject(project)}
          <div className="flex flex-row  gap-3 rounded-md border-2 border-neutral-600 bg-neutral-700 p-3 shadow-md">
            {renderLanguages(project)}
          </div>
        </div>
      </div>
    </div>
  );
}
