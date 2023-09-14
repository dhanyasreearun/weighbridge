import { DocIcon } from "./icons/docIcon";
import { HomeIcon } from "./icons/homeIcon";
import { TaskIcon } from "./icons/taskIcon";
import { ReportIcon } from "./icons/reportIcon";
import { ProjectIcon } from "./icons/projectIcon";
import { SettingsIcon } from "./icons/settingsIcon";
import { CalendarIcon } from "./icons/calenderIcon";
import { TimeManageIcon } from "./icons/timeManageIcon";

export const data = [
  {
    section: "Section1",
    content: [
      {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/",
      },
      {
        title: "Vehicle Master",
        icon: <ProjectIcon />,
        link: "/vehiclemaster",
      },
      {
        title: "Customer Master",
        icon: <ProjectIcon />,
        link: "/customermaster",
      },
      {
        title: "Weighing Process",
        icon: <ProjectIcon />,
        link: "/weighingprocess",
      },
    ],
  },
  {
    section: "Section2",
    content: [
      {
        title: "My tasks",
        icon: <TaskIcon />,
        link: "/admin/tasks",
      },
      {
        title: "Calendar",
        icon: <CalendarIcon />,
        link: "/admin/calendar",
      },
      {
        title: "Time manage",
        icon: <TimeManageIcon />,
        link: "/admin/time-manage",
      },
    ],
  },
  {
    section: "Section3",
    content: [
      {
        title: "Reports",
        icon: <ReportIcon />,
        link: "/admin/reports",
      },
      {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/admin/settings",
      },
      {
        title: "Documentation",
        icon: <DocIcon />,
        link: "/admin/documentation",
      },
      {
        title: "Logout",
        icon: <DocIcon />,
        link: "/logout",
      },
    ],
  },
];
