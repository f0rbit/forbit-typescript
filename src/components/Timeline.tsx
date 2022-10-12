import CommitTimelineItem from "components/timeline/CommitTimelineItem";
import RedditTimelineItem from "components/timeline/RedditTimelineItem";
import TwitterTimelineItem from "components/timeline/TwitterTimelineItem";

export function getDate(date: string) {
  const d = new Date(date);
  return <p>{d.toLocaleString("en-AU", {})}</p>;
}

function monthDate(month: string, year: number) {
  return (
    <>
      <div className="p-5 text-lg text-white" id={(month + year).toLowerCase()}>
        {month + " " + year}
      </div>
    </>
  );
}

function renderTimeline(timeline: any) {
  const objects = [];
  let month = -1;
  for (let i = 0; i < timeline.length; i++) {
    const date = new Date(timeline[i].date);
    if (month !== date.getMonth()) {
      // new month
      objects.push(
        monthDate(
          date.toLocaleDateString("en-AU", { month: "long" }),
          date.getFullYear()
        )
      );
      month = date.getMonth();
    }
    objects.push(TimelineItem(timeline[i]));
  }
  return objects;
}

function TimelineItem(data: any) {
  if (data.category === "COMMITS") return <CommitTimelineItem commits={data} />;
  if (data.category === "REDDIT") return <RedditTimelineItem post={data} />;
  if (data.category === "TWITTER") return <TwitterTimelineItem post={data} />;
  return <></>;
}

type TimelineProps = {
  timeline: any
}
function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="h-full min-w-[70%] max-w-[38rem] p-2">
      <div className="flex flex-col items-center justify-center space-y-4">
        {renderTimeline(timeline)}
      </div>
    </div>
  );
}

export default Timeline;
