"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";
import axios from "axios";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function ProjectsPage() {
  const [vechicleOptions, setVehicleOptions] = React.useState([]);

  useEffect(() => {
    axios
      .get("api/vehicle/vehiclemaster")
      .then((response) => {
        setVehicleOptions(response.data.vehicles);
      })
      .catch((error) => console.log(error));
  }, []);

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  return (
    <ProfileLayout>
      <Content
        title="Weighing Process"
        details="Fill details from the existing lists"
      >
        <div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Vehicle Number
                </label>
                <select
                  name="vehiclenumber"
                  id="vehiclenumber"
                  onChange={(e) => setVehicleOptions(e.target.value)}
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  {vechicleOptions.map((option) => (
                    <option
                      key={option.vehiclenumber}
                      value={option.vehiclenumber}
                    >
                      {option.vehiclenumber}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    buttonDisabled ? "disabled:opacity-50" : ""
                  }`}
                  disabled={buttonDisabled}
                >
                  Save
                </button>
                {loading && (
                  <div className="mt-10 text-center text-sm text-gray-500">
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Content>
    </ProfileLayout>
  );
}
