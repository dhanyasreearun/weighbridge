"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function ProjectsPage() {
  const [vehiclemaster, setVehicleMaster] = React.useState({
    vehiclenumber: "",
    vehicleowner: "",
    vehicleweight: "",
    vehicletype: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const saveVehicleMaster = async () => {
    try {
      setLoading(true);
    } catch (error: any) {
      console.log("Sign up failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      vehiclemaster.vehiclenumber.length > 0 &&
      vehiclemaster.vehicleowner.length > 0 &&
      vehiclemaster.vehicleweight.length > 0 &&
      vehiclemaster.vehicletype.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [vehiclemaster]);

  return (
    <ProfileLayout>
      <Content title="Vehicle Master" details="Fill details about the vehicle">
        <div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Vehicle Number
                </label>
                <div className="mt-2">
                  <input
                    id="vehiclenumber"
                    name="vehiclenumber"
                    type="text"
                    onChange={(e) =>
                      setVehicleMaster({
                        ...vehiclemaster,
                        vehiclenumber: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Owner Name
                </label>
                <div className="mt-2">
                  <input
                    id="owner"
                    name="owner"
                    type="text"
                    onChange={(e) =>
                      setVehicleMaster({
                        ...vehiclemaster,
                        vehicleowner: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Total Weight
                </label>
                <div className="mt-2">
                  <input
                    id="vehicleweight"
                    name="vehicleweight"
                    type="text"
                    onChange={(e) =>
                      setVehicleMaster({
                        ...vehiclemaster,
                        vehicleweight: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Vehicle Type
                </label>
                <div className="mt-2">
                  <input
                    id="vehicletype"
                    name="vehicletype"
                    type="text"
                    onChange={(e) =>
                      setVehicleMaster({
                        ...vehiclemaster,
                        vehicletype: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={saveVehicleMaster}
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    buttonDisabled ? "disabled:opacity-50" : ""
                  }`}
                  disabled={buttonDisabled}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Content>
    </ProfileLayout>
  );
}
