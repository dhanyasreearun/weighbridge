"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";
import axios from "axios";
import { TransporterIcon } from "../components/sidebar/icons/transporterIcon";

export default function Transporter() {
  const [transportermaster, setTransporterMaster] = React.useState({
    transporterid: "",
    transportername: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const saveTransporterMaster = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "api/vehicle/transportermaster",
        transportermaster
      );
      console.log("Transporter master saved", response.data);
      toast.success("Transporter master saved");
    } catch (error: any) {
      console.log("Saving Transporter master failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      transportermaster.transporterid.length > 0 &&
      transportermaster.transportername.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [transportermaster]);

  return (
    <ProfileLayout>
      <Content
        title="Transporter Master"
        details="Fill details about the transporter"
        icon={<TransporterIcon />}
      >
        <div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Transporter ID
                </label>
                <div className="mt-2">
                  <input
                    id="transporterid"
                    name="transporterid"
                    type="text"
                    onChange={(e) =>
                      setTransporterMaster({
                        ...transportermaster,
                        transporterid: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Transporter Name
                </label>
                <div className="mt-2">
                  <input
                    id="transportername"
                    name="transportername"
                    type="text"
                    onChange={(e) =>
                      setTransporterMaster({
                        ...transportermaster,
                        transportername: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={saveTransporterMaster}
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
