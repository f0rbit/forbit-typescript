// tweet text

type TweetTextProps = {
  tweet: any
}
const TweetText = ( {tweet}: TweetTextProps ) => {
    return <span>{getTweet(tweet)}</span>;
}

const getTextColour = (type: string) => {
    if (type === "USER" || type === "LINK") {
      return "text-sky-500 font-bold hover:text-sky-600";
    } else {
      return "text-sky-500 hover:text-sky-600";
    }
  };
const getTweet = (tweet: any) => {
  const objects = [];
  for (let i = 0; i < tweet.length; i++) {
    if ("url" in tweet[i]) {
      objects.push(
        <a
          href={tweet[i].url}
          className={getTextColour(tweet[i].type)}
          key={"link" + tweet[i].url}
        >
          {tweet[i].content}
        </a>
      );
    } else {
      objects.push(<span key={i}>{tweet[i].content}</span>);
    }
  }
  return objects;
};

export default TweetText;