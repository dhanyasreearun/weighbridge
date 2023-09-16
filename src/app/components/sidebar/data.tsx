import { DocIcon } from "./icons/docIcon";
import { HomeIcon } from "./icons/homeIcon";
import { TaskIcon } from "./icons/taskIcon";
import { ReportIcon } from "./icons/reportIcon";
import { VehicleIcon } from "./icons/vehicleIcon";
import { CustomerIcon } from "./icons/customerIcon";
import { SettingsIcon } from "./icons/settingsIcon";
import { CalendarIcon } from "./icons/calenderIcon";
import { TimeManageIcon } from "./icons/timeManageIcon";
import { MaterialIcon } from "./icons/materialIcon";
import { TransporterIcon } from "./icons/transporterIcon";
import { DriverIcon } from "./icons/driverIcon";
import { DestinationIcon } from "./icons/destinationIcon";
import { SourceIcon } from "./icons/sourceIcon";
import { WeighingIcon } from "./icons/weighingIcon";

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
        icon: <VehicleIcon />,
        link: "/vehiclemaster",
      },
      {
        title: "Customer Master",
        icon: <CustomerIcon />,
        link: "/customermaster",
      },
      {
        title: "Material Master",
        icon: <MaterialIcon />,
        link: "/materialmaster",
      },
      {
        title: "Transporter Master",
        icon: <TransporterIcon />,
        link: "/transportermaster",
      },
      {
        title: "Driver Master",
        icon: <DriverIcon />,
        link: "/drivermaster",
      },
      {
        title: "Destination Master",
        icon: <DestinationIcon />,
        link: "/destinationmaster",
      },
      {
        title: "Source Master",
        icon: <SourceIcon />,
        link: "/sourcemaster",
      },
      {
        title: "Weighing Process",
        icon: <WeighingIcon />,
        link: "/weighingprocess",
      },
    ],
  },
];
