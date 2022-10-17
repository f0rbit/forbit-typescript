import { PROJECT_STATUS } from "@prisma/client";
import { AbandonedIcon } from "public/icons/status_icons/abandoned";
import { DevelopmentIcon } from "public/icons/status_icons/development";
import { LiveIcon } from "public/icons/status_icons/live";
import { ReleasedIcon } from "public/icons/status_icons/released";
import { StoppedIcon } from "public/icons/status_icons/stopped";
import { ReactNode } from "react";

const getIconData = (status: PROJECT_STATUS): { colour: string, icon: ReactNode | null} => {
  switch (status) {
    case PROJECT_STATUS.LIVE:
      return {
        colour: "text-green-600",
        icon: LiveIcon()
      };
    case PROJECT_STATUS.ABANDONED:
      return {
        colour: "text-red-400",
        icon: AbandonedIcon()
      }
    case PROJECT_STATUS.DEVELOPMENT:
      return {
        colour: "text-fuchsia-400",
        icon: DevelopmentIcon()
      }
    case PROJECT_STATUS.STOPPED:
      return {
        colour: "text-red-400",
        icon: StoppedIcon()
      }
    case PROJECT_STATUS.FINISHED:
    case PROJECT_STATUS.PAUSED:
      /** @todo implement this */
      return {
        colour: "",
        icon: null
      }
    case PROJECT_STATUS.RELEASED:
      return {
        colour: "text-green-500",
        icon: ReleasedIcon()
      }
  }
}

const getStatus = (status: PROJECT_STATUS) => {
  const data = getIconData(status);
  return (
    <div className={"relative flex w-min items-center justify-center gap-2 " + data?.colour}>
      <div>
        <div className="h-4 w-4 fill-current">{data?.icon}</div>
      </div>
      <p className="font-semibold">{status}</p>
    </div>
  )
};

type ProjectStatusCardType = {
  status: PROJECT_STATUS;
};
const ProjectStatusCard = ({ status }: ProjectStatusCardType) => {
  return <div className="pt-0.5 text-center">{getStatus(status)}</div>;
};

export default ProjectStatusCard;
