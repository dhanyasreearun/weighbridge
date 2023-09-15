"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function ProjectsPage() {
  const [destinationmaster, setdestinationMaster] = React.useState({
    destinationid: "",
    destinationname: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const savedestinationMaster = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "api/vehicle/destinationmaster",
        destinationmaster
      );
      console.log("destination master saved", response.data);
      toast.success("destination master saved");
    } catch (error: any) {
      console.log("Saving destination master failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      destinationmaster.destinationid.length > 0 &&
      destinationmaster.destinationname.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [destinationmaster]);

  return (
    <ProfileLayout>
      <Content
        title="Destination Master"
        details="Fill details about the destination"
      >
        <div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Destination ID
                </label>
                <div className="mt-2">
                  <input
                    id="destinationid"
                    name="destinationid"
                    type="text"
                    onChange={(e) =>
                      setdestinationMaster({
                        ...destinationmaster,
                        destinationid: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Destination Name
                </label>
                <div className="mt-2">
                  <input
                    id="destinationname"
                    name="destinationname"
                    type="text"
                    onChange={(e) =>
                      setdestinationMaster({
                        ...destinationmaster,
                        destinationname: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={savedestinationMaster}
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
