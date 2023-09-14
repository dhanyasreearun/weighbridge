import { Sidebar } from "../components/sidebar/sideBar";
import { TopBar } from "../components/topbar/topbar";

interface VechivleProps {
  children: React.ReactNode;
}

const style = {
  mainContainer:
    "flex flex-col w-full h-screen pl-0 lg:space-y-4 lg:w-[calc(100%-16rem)]",
  container: "bg-white h-screen overflow-hidden relative",
  main: "bg-white h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl",
};

export default function VehicleMaster(props: VechivleProps) {
  return (
    <div className={style.container}>
      <div className="flex items-start">
        <Sidebar mobileOrientation="end" />
        <div className={style.mainContainer}>
          <TopBar />
          <div className="content-center">
            <h1>Vehicle Master</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
