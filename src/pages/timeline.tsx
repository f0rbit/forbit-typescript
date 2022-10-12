import NavBar from "components/NavBar";
import Timeline from "components/Timeline";
import Head from "next/head";

function getCommit(commits: any) {
  const reversecommits = [];
  for (let i = commits.length - 1; i >= 0; i--) {
    reversecommits.push(commits[i]);
  }

  return {
    category: "COMMITS",
    commits: reversecommits,
    date: commits[commits.length - 1].date,
    title: commits.length + " Commits to f0rbit/" + commits[0].project,
    project: commits[0].project,
  };
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const line = await fetch(
    "http://" + process.env.NEXT_PUBLIC_POST_DB + "/posts"
  );
  const templine = await line.json();
  const reverseline = [];
  // group commits to the same project together
  let commits = [];
  for (let i = templine.length - 1; i >= 0; i--) {
    if (templine[i].category === "GITHUB") {
      // add to github bucket
      if (commits.length < 1 || templine[i].project === commits[0].project) {
        commits.push(templine[i]);
      } else {
        // push out commits to reverseline
        reverseline.push(getCommit(commits));
        commits = [];
        commits.push(templine[i]);
      }
    } else {
      if (commits.length > 0) {
        // push commits as bucket
        reverseline.push(getCommit(commits));
        commits = [];
      }
      reverseline.push(templine[i]);
    }
  }
  if (commits.length > 0) {
    reverseline.push(getCommit(commits));
  }
  const timeline = [];
  // and then reverse the timeline
  for (let j = reverseline.length - 1; j >= 0; j--) {
    timeline.push(reverseline[j]);
  }
  return {
    props: {
      timeline,
    },
    revalidate: 30,
  };
}

function title(word: string) {
  return (
    <div>
      <div className="py-2 px-1 text-4xl font-bold text-white">
        <div className="">{word}</div>
      </div>
    </div>
  );
}

type TimelineProps = {
  timeline: any
}
export default function TimelinePage({ timeline }: TimelineProps) {
  return (
    <div className="relative top-0 h-screen w-screen overflow-x-hidden scroll-smooth bg-neutral-800">
      <Head>
        <title>forbit.dev | Timeline</title>
      </Head>
      <div className="absolute top-0 z-10 h-min w-full">
        <NavBar noicon={false}/>
      </div>
      <div className="mt-14 flex flex-row flex-nowrap justify-center py-4 px-4">
        <div className="w-[48rem]">
          <div className="flex flex-col flex-nowrap items-center justify-center">
            <div>{title("Timeline")}</div>
            <div>
              <Timeline timeline={timeline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
