"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";
import axios from "axios";
import { WeighingIcon } from "../components/sidebar/icons/weighingIcon";

export default function ProjectsPage() {
  const [vechicleOptions, setVehicleOptions] = React.useState([]);
  const [customerOptions, setcustomerOptions] = React.useState([]);
  const [materialOptions, setmaterialOptions] = React.useState([]);
  const [transporterOptions, setransporterOptions] = React.useState([]);
  const [driverOptions, setDriverOptions] = React.useState([]);
  const [destinationOptions, setDestinationOptions] = React.useState([]);
  const [sourceOptions, setSourceOptions] = React.useState([]);

  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [weighingMaster, setWeighingMaster] = React.useState({
    vehiclenumber: "",
    customername: "",
    materialname: "",
    transportername: "",
    drivername: "",
    destinationname: "",
    sourcename: "",
    weighingtype: "",
    netweight: "",
    materialrate: "",
  });

  useEffect(() => {
    if (!hasLoaded) {
      axios
        .get("api/vehicle/vehiclemaster")
        .then((response) => {
          setVehicleOptions(response.data.vehicles);
        })
        .catch((error) => console.log(error));

      axios
        .get("api/vehicle/customermaster")
        .then((response) => {
          setcustomerOptions(response.data.customer);
        })
        .catch((error) => console.log(error));

      axios
        .get("api/vehicle/materialmaster")
        .then((response) => {
          setmaterialOptions(response.data.material);
        })
        .catch((error) => console.log(error));

      axios
        .get("api/vehicle/transportermaster")
        .then((response) => {
          setransporterOptions(response.data.transporter);
        })
        .catch((error) => console.log(error));

      axios
        .get("api/vehicle/drivermaster")
        .then((response) => {
          setDriverOptions(response.data.driver);
        })
        .catch((error) => console.log(error));

      axios
        .get("api/vehicle/destinationmaster")
        .then((response) => {
          setDestinationOptions(response.data.destination);
        })
        .catch((error) => console.log(error));

      axios
        .get("api/vehicle/sourcemaster")
        .then((response) => {
          setSourceOptions(response.data.source);
        })
        .catch((error) => console.log(error));
      setHasLoaded(true);
    }

    if (
      weighingMaster.vehiclenumber.length > 0 &&
      weighingMaster.customername.length > 0 &&
      weighingMaster.materialname.length > 0 &&
      weighingMaster.transportername.length > 0 &&
      weighingMaster.drivername.length > 0 &&
      weighingMaster.destinationname.length > 0 &&
      weighingMaster.sourcename.length > 0 &&
      weighingMaster.weighingtype.length > 0 &&
      weighingMaster.netweight.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [weighingMaster]);

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const saveWeighingMaster = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "api/vehicle/weighingmaster",
        weighingMaster
      );
      console.log("weighing master saved", response.data);
      toast.success("weighing master saved");
    } catch (error: any) {
      console.log("Saving weighing master failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileLayout>
      <Content
        title="Weighing Process"
        details="Fill details for weighing process"
        icon={<WeighingIcon />}
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
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      vehiclenumber: e.target.value,
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {vechicleOptions.map((option) => (
                    <option key={option._id} value={option.vehiclenumber}>
                      {option.vehiclenumber}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Customer Name
                </label>
                <select
                  name="customername"
                  id="customername"
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      customername: e.target.value,
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {customerOptions.map((option) => (
                    <option key={option._id} value={option.customername}>
                      {option.customername}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Material Name
                </label>
                <select
                  name="materialname"
                  id="materialname"
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      materialname: e.target.value,
                      materialrate:
                        e.target.options[e.target.selectedIndex].getAttribute(
                          "data-rate"
                        ),
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {materialOptions.map((option) => (
                    <option
                      key={option._id}
                      value={option.materialname}
                      data-rate={option.materialrate}
                    >
                      {option.materialname}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Transporter Name
                </label>
                <select
                  name="transportername"
                  id="transportername"
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      transportername: e.target.value,
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {transporterOptions.map((option) => (
                    <option key={option._id} value={option.transportername}>
                      {option.transportername}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Driver Name
                </label>
                <select
                  name="drivername"
                  id="drivername"
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      drivername: e.target.value,
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {driverOptions.map((option) => (
                    <option key={option._id} value={option.drivername}>
                      {option.drivername}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Deatination Name
                </label>
                <select
                  name="destinationname"
                  id="destinationname"
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      destinationname: e.target.value,
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {destinationOptions.map((option) => (
                    <option key={option._id} value={option.destinationname}>
                      {option.destinationname}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Source Name
                </label>
                <select
                  name="sourcename"
                  id="sourcename"
                  onChange={(e) =>
                    setWeighingMaster({
                      ...weighingMaster,
                      sourcename: e.target.value,
                    })
                  }
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option key="0" value="Please select">
                    {" "}
                    Please select a value
                  </option>
                  {sourceOptions.map((option) => (
                    <option key={option._id} value={option.sourcename}>
                      {option.sourcename}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Weighing Type
                </label>
                <div className="flex mt-4">
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5  rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="weighingtype"
                      id="weighingtype"
                      value="Manual"
                      onChange={(e) =>
                        setWeighingMaster({
                          ...weighingMaster,
                          weighingtype: e.target.value,
                        })
                      }
                    />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                      Manual
                    </label>
                  </div>
                  <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="weighingtype"
                      id="Auto"
                      onChange={(e) =>
                        setWeighingMaster({
                          ...weighingMaster,
                          weighingtype: e.target.value,
                        })
                      }
                      value="Auto"
                    />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                      Auto
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Net Weight
                </label>
                <div className="mt-2">
                  <input
                    id="netweight"
                    name="netweight"
                    type="text"
                    onChange={(e) =>
                      setWeighingMaster({
                        ...weighingMaster,
                        netweight: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={saveWeighingMaster}
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
