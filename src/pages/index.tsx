import type { NextPage } from "next";
import { PageContainer } from "src/components/PageContainer";
import NavBar from "src/components/NavBar";
import Description from "src/components/About/Description";
import RecentCommits from "src/components/RecentCommits";
import { TypeAnimation } from "react-type-animation";

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const line = await fetch(
    "http://" + process.env.NEXT_PUBLIC_POST_DB + "/posts?category=GITHUB"
  );
  const commits = await line.json();
  return {
    props: {
      commits,
    },
    revalidate: 30,
  };
}

const Home: NextPage = ({ commits }: any) => {
  return (
    <PageContainer title={"Home"}>
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-neutral-900">
        <h1 className="text-8xl font-bold text-white">forbit</h1>
        <div className="text-neutral-500">
          <span>I </span>
          <TypeAnimation
            sequence={[
              "am a developer.",
              1000,
              "am a game designer.",
              1000,
              "am an open source contributor.",
              1000,
              "study computer science.",
              1000,
              "am an artist",
              1000,
              "am a gamer.",
              1000,
            ]}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
          />
        </div>
      </div>
      <div className="h-full w-full">
        <NavBar noicon={true} />
      </div>
      <div className="h-full w-screen bg-neutral-800">
        <div className="flex flex-wrap gap-0 space-y-6 p-3 lg:flex-nowrap lg:gap-6">
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="shadow-md">
              <Description />
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className=" flex items-center justify-center rounded-md border-2 border-neutral-700 py-2 px-4 shadow-md">
              <RecentCommits commits={commits} />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
