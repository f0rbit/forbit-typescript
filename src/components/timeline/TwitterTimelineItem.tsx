import { getDate } from "components/Timeline";
import { commentIcon } from "./RedditTimelineItem";
import TweetText from "components/TweetText";
import tweetParser from "tweet-parser";

export function retweetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 75 72"
    >
      <path d="M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z" />
    </svg>
  );
}
export function heartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
}

type TimelineItemType = {
  post: any
}
export default function TwitterTimelineItem({ post }: TimelineItemType) {
  return (
    <div
      className="h-full w-full rounded-md  p-2 text-center"
      key={"twitter" + post.date}
    >
      <div className="shadow-m rounded-md border-2 border-neutral-700 bg-neutral-800 px-4 py-2">
        <div className="mb-2 flex items-center justify-center">
          <span className="text-center font-bold text-white">Tweet from</span>
          <span className="w-1" />
          <span className="text-center font-bold">
            <a
              href="https://twitter.com/f0rbit"
              className="text-sky-500 hover:text-sky-600"
            >
              @f0rbit
            </a>
          </span>
        </div>
        <div className="mb-2 rounded-md border-2 border-neutral-600 bg-neutral-700 p-3">
          <p className="text-sm text-neutral-200">
            <TweetText tweet={tweetParser(post.tweetContent)} />
          </p>
          <div className="h-1 w-1" />
          <div className="flex flex-row items-center justify-center space-x-1 text-center text-sm text-neutral-400">
            <span className="w-4">{heartIcon()}</span>
            <span>{post.likeCount}</span>
            <span className="w-1" />
            <span className="w-4">{commentIcon()}</span>
            <span>{post.replyCount}</span>
            <span className="w-1" />
            <span className="w-5">{retweetIcon()}</span>
            <span>{post.retweetCount}</span>
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
