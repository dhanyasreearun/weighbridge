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
  const [materialmaster, setMaterialMaster] = React.useState({
    materialid: "",
    materialname: "",
    materialunit: "",
    materialrate: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const saveMaterialMaster = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "api/vehicle/materialmaster",
        materialmaster
      );
      console.log("MAterial master saved", response.data);
      toast.success("Material master saved");
    } catch (error: any) {
      console.log("Saving Material master failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      materialmaster.materialid.length > 0 &&
      materialmaster.materialname.length > 0 &&
      materialmaster.materialunit.length > 0 &&
      materialmaster.materialrate.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [materialmaster]);

  return (
    <ProfileLayout>
      <Content
        title="Material Master"
        details="Fill details about the material"
      >
        <div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Material ID
                </label>
                <div className="mt-2">
                  <input
                    id="materialid"
                    name="materialid"
                    type="text"
                    onChange={(e) =>
                      setMaterialMaster({
                        ...materialmaster,
                        materialid: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Material Name
                </label>
                <div className="mt-2">
                  <input
                    id="materialname"
                    name="materialname"
                    type="text"
                    onChange={(e) =>
                      setMaterialMaster({
                        ...materialmaster,
                        materialname: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Material Unit
                </label>
                <div className="flex mt-4">
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5  rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="materialunit"
                      id="kg"
                      value="kg"
                      onChange={(e) =>
                        setMaterialMaster({
                          ...materialmaster,
                          materialunit: e.target.value,
                        })
                      }
                    />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                      Kg
                    </label>
                  </div>
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="materialunit"
                      id="ton"
                      onChange={(e) =>
                        setMaterialMaster({
                          ...materialmaster,
                          materialunit: e.target.value,
                        })
                      }
                      value="Ton"
                    />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                      Ton
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Material Rate
                </label>
                <div className="mt-2">
                  <input
                    id="materialrate"
                    name="materialrate"
                    type="text"
                    onChange={(e) =>
                      setMaterialMaster({
                        ...materialmaster,
                        materialrate: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={saveMaterialMaster}
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
