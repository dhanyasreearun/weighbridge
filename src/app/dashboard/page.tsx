"use client";
import React, { useEffect } from "react";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";
import { toast } from "react-hot-toast";
import axios from "axios";
import { DestinationIcon } from "../components/sidebar/icons/destinationIcon";
import { renderToStaticMarkup } from "react-dom/server";
import html2pdf from "html2pdf.js";

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

  const Report = ({ item }) => {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-4">Invoice</h1>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm">From:</p>
            <p className="font-semibold">Amrita Weighbridge</p>
            <p>Amrita Ahead</p>
            <p>Kollam Kerala</p>
          </div>
          <div>
            <p className="text-sm">To:</p>
            <p className="font-semibold">{item.customername}</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm">Source:</p>
            <p className="font-semibold">{item.sourcename}</p>
          </div>
          <div>
            <p className="text-sm">Destination:</p>
            <p className="font-semibold">{item.destinationname}</p>
          </div>
          <div>
            <p className="text-sm">Vehicle:</p>
            <p className="font-semibold">{item.vehiclenumber}</p>
          </div>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-left">Material</th>
              <th className="text-right">Quantity</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.materialname}</td>
              <td className="text-right">{item.netweight}</td>
              <td className="text-right">{item.materialrate}</td>
              <td className="text-right">
                {item.netweight * item.materialrate}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
          <div className="w-1/2">
            <p className="text-right">
              Subtotal: {item.netweight * item.materialrate}
            </p>
            <p className="text-right">
              Tax (10%): {item.netweight * item.materialrate * 0.1}
            </p>
            <p className="text-right font-semibold text-xl mt-2">
              Total:{" "}
              {item.netweight * item.materialrate +
                item.netweight * item.materialrate * 0.1}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm">Payment Instructions:</p>
          <p className="text-gray-600">
            Please make payment to the following bank account:
          </p>
          <p className="text-gray-600">Bank Name: State Bank Of India</p>
          <p className="text-gray-600">Account Number: 123456</p>
        </div>
      </div>
    );
  };

  const handleDownloadPDF = async (item) => {
    const html = renderToStaticMarkup(<Report item={item} />);
    html2pdf().from(html).save();
  };

  const [loading, setLoading] = React.useState(false);

  return (
    <ProfileLayout>
      <Content title="Weighing Data" details="" icon={<DestinationIcon />}>
        <div>
          <div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <ul>
                  {dashboardOptions.length > 0 ? (
                    dashboardOptions.map((option, index) => (
                      <li
                        key={index}
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
                        <div>
                          <a
                            className="flex w-full  cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                            onClick={() => handleDownloadPDF(option)}
                          >
                            Invoice
                          </a>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="text-center text-gray-500">
                      Weighing details yet to be added
                    </li>
                  )}
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
