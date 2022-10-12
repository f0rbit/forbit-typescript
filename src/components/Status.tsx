import { AbandonedIcon } from "public/icons/status_icons/abandoned";
import { DevelopmentIcon } from "public/icons/status_icons/development";
import { LiveIcon } from "public/icons/status_icons/live";
import { ReleasedIcon } from "public/icons/status_icons/released";
import { StoppedIcon } from "public/icons/status_icons/stopped";

const getLiveCard = () => {
  return (
    <div className="relative flex w-min items-center justify-center gap-2 text-green-600">
      <div>
        <div className="h-4 w-4 fill-current">{LiveIcon()}</div>
      </div>
      <p> Live </p>
    </div>
  );
};
const getDevelopmentCard = () => {
  return (
    <div className="relative flex w-min items-center justify-center gap-2 text-fuchsia-400">
      <div className="h-4 w-4 fill-current">{DevelopmentIcon()}</div>
      <p> Development </p>
    </div>
  );
};
const getStoppedCard = () => {
  return (
    <div className="relative flex w-min items-center justify-center gap-2 text-red-400">
      <div>
        <div className="h-4 w-4 fill-current">{StoppedIcon()}</div>
      </div>
      <p> Stopped </p>
    </div>
  );
};
const getReleasedCard = () => {
  return (
    <div className="relative flex w-min items-center justify-center gap-2 text-green-500">
      <div>
        <div className="h-4 w-4 fill-current">{ReleasedIcon()}</div>
      </div>
      <p> Released </p>
    </div>
  );
};
const getAbandonedCard = () => {
  return (
    <div className="relative flex w-min items-center justify-center gap-2 text-red-400">
      <div>
        <div className="h-4 w-4 fill-current"> {AbandonedIcon()}</div>
      </div>
      <p> Abandoned </p>
    </div>
  );
};

const getStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "live":
      return getLiveCard();
    case "development":
      return getDevelopmentCard();
    case "stopped":
      return getStoppedCard();
    case "released":
      return getReleasedCard();
    case "abandoned":
      return getAbandonedCard();
    default:
      return getDevelopmentCard();
  }
};

type ProjectStatusCardType = {
  status: string;
};
const ProjectStatusCard = ({ status }: ProjectStatusCardType) => {
  return <div className="pt-0.5 text-center">{getStatus(status)}</div>;
};

export default ProjectStatusCard;
