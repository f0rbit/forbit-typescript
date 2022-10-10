import { ReactElement, ReactNode } from "react";

function getFormmatedDate(date: string): string {
  const d = new Date(date);
  const month = d.toLocaleDateString("default", { month: "long" });
  return d.getDate() + " " + month + ", " + d.getFullYear();
}

function recent(commits: any): ReactNode[] {
  const objects = [];
  for (let i = 0; i < 5; i++) {
    const commit = commits[i];
    objects.push(
      <li key={commit.sha} className="ml-5 mb-5">
        <div className="absolute -left-2 -mt-0.5 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-300"></div>
        <div className="-ml-1 mb-2 text-xs font-normal leading-none text-neutral-300">
          {getFormmatedDate(commit.date)}
        </div>
        <div className="-ml-2 rounded-md border-2 border-solid border-neutral-600 bg-neutral-700 px-2 py-2 shadow-md">
          <h1 className=" mb-2 text-lg font-semibold text-white">
            {commit.title}
          </h1>
          {commit.description ? (
            <div className="mb-1 mt-1 rounded-md border-2 border-neutral-600 bg-neutral-700 p-2 font-mono text-xs text-neutral-400 shadow-sm">
              {commit.description}
            </div>
          ) : (
            <></>
          )}
          <div className="text-xs">
            <span>
              <a
                href={commit.permalink}
                className="font-mono text-sky-500 hover:text-sky-600"
              >
                {commit.sha.substring(0, 7)}
              </a>
            </span>
            <span className="text-neutral-100"> - </span>
            <span>
              <a
                href={"https://github.com/f0rbit/" + commit.project}
                className="text-sky-500 hover:text-sky-600"
              >
                f0rbit/{commit.project}
              </a>
            </span>
          </div>
        </div>
      </li>
    );
  }
  return objects;
}

type RecentCommitsProps = {
  commits: any
}
export default function RecentCommits({ commits }: RecentCommitsProps): ReactElement {
  return (
    <div className="w-auto max-w-[24rem]">
      <h1 className="text-center text-lg font-bold text-white">
        Recent Commits
      </h1>
      <ol className="relative border-l border-neutral-300">
        {recent(commits)}
      </ol>
    </div>
  );
}
