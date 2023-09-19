"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";
import axios from "axios";
import { DestinationIcon } from "../components/sidebar/icons/destinationIcon";

export default function Dashboard() {
  const [dashboardOptions, setDashboardOptions] = React.useState([]);

  useEffect(() => {
    axios
      .get("api/vehicle/dashboard")
      .then((response) => {
        setDashboardOptions(response.data.weighingmaster);
      })
      .catch((error) => console.log(error));
  }, []);

  const [loading, setLoading] = React.useState(false);

  return (
    <ProfileLayout>
      <Content title="Weighing Data" details="" icon={<DestinationIcon />}>
        <div>
          <div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <ul>
                  {dashboardOptions.map((option) => (
                    <li
                      key={option._id}
                      className="flex items-center justify-between border-b-2 border-gray-100 py-3 text-gray-600"
                    >
                      <div className="flex items-center justify-start text-sm">
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              Vehicle
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.vehiclenumber}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              Customer
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.customername}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              From
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.sourcename}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              To
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.destinationname}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              Driver
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.drivername}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              Material
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.materialname}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              WeighingType
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.weighingtype}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              Net Weight
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.netweight}
                            </span>
                          </div>
                        </span>
                        <span className="mx-5">
                          <div className="flex flex-col">
                            <span className="ml-2 text-sm text-gray-400">
                              Total Cost
                            </span>
                            <span className="ml-2 text-sm font-semibold text-gray-900">
                              {option.netweight * option.materialrate}
                            </span>
                          </div>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
            </form>
          </div>
        </div>
      </Content>
    </ProfileLayout>
  );
}
