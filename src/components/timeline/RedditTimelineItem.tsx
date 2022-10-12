import { getDate } from "components/Timeline";
export function upvoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-arrow-up-short"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
      />
    </svg>
  );
}

export function commentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-chat-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
    </svg>
  );
}

type RedditTimelineProps = {
  post: any
}
export default function RedditTimelineItem({ post }: RedditTimelineProps) {
  return (
    <div
      className="h-full w-full rounded-md  p-2 text-center"
      key={"reddit " + post.title}
    >
      <div className="shadow-m flex flex-col items-center justify-center space-y-2 rounded-md border-2 border-neutral-700 bg-neutral-800 p-2">
        <div className="flex items-center">
          <h5 className="w-full text-center font-bold text-white">
            {post.title}
          </h5>
        </div>
        <div className="flex w-min flex-col items-center justify-center rounded-md border-2 border-neutral-600 bg-neutral-700 p-2 text-sm text-neutral-400">
          <div className="flex flex-row items-center justify-center">
            <span className="w-5">{upvoteIcon()}</span>
            <span>{post.score}</span>
            <span className="w-2" />
            <span className="w-4">{commentIcon()}</span>
            <span className="w-1" />
            <span>{post.comments}</span>
          </div>
          <div className="text-sm">
            <a
              href={"https://reddit.com" + post.permalink}
              className="text-sky-500 hover:text-sky-600"
            >
              r/{post.subreddit}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-1 flex flex-nowrap justify-center  space-x-2 text-xs">
        <span className="text-center text-fuchsia-300">{post.category}</span>
        <span className="text-center text-neutral-500">
          {getDate(post.date)}
        </span>
      </div>
    </div>
  );
}
