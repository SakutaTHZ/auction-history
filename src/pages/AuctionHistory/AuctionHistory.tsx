import { CgProfile } from "react-icons/cg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import SelectBox from "../../components/SelectBox";
import {
  auctionGrades,
  auctions,
  colors,
  status,
  vehicleGrades,
} from "../../assets/dataFile";
import { IoMdCar } from "react-icons/io";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import DataRow from "../../components/DataRow";

function AuctionHistory() {
  const handleAuctionSelectionChange = (selected: string[]) => {
    console.log("Selected:", selected);
  };

  const [selectedOrder, setSelectedOrder] = useState<string>("Date asc");
  const sortOptions = [
    { name: "Date asc", value: "asc" },
    { name: "Date desc", value: "desc" },
  ];

  const tableColClass = "border-r border-gray-200 px-2 py-1 text-center";

  return (
    <section className="bg-gray-100 h-screen overflow-hidden overflow-y-scroll px-6">
      {/* nav bar */}
      <nav className="nav w-full h-fit flex justify-between items-center px-6 py-4 gap-8 fixed top-0 bg-gray-100 inset-0 z-[100]">
        <h1 className="logo font-semibold text-lg text-nowrap">JDM Wheels</h1>
        <ul className="w-full flex gap-8 items-center overflow-hidden overflow-x-auto">
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
          <li>
            <a href="#">Orderlist</a>
          </li>
          <li>
            <a href="#">Our Selection</a>
          </li>
          <li>
            <a href="#">My Basket</a>
          </li>
          <li>
            <a href="#">My Results</a>
          </li>
          <li>
            <a href="#" className="text-yellow-500 font-semibold">
              Qualifying
            </a>
          </li>
          <li>
            <a href="#">Alarms</a>
          </li>
          <li>
            <a href="#">Bidding</a>
          </li>
          <li>
            <a href="#">Tasks</a>
          </li>
          <li>
            <a href="#">Translations</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Transports</a>
          </li>
          <li>
            <a href="#">Analysis</a>
          </li>
        </ul>
        <div className="timeBox flex items-center gap-2">
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          <div>
            <img src="" alt="" />
            <p className="text-nowrap">Japan time 12:52</p>
          </div>
          <div className="flex items-center gap-1">
            <CgProfile className="text-2xl text-gray-500" />
            <p className="text-nowrap">Thar-Dev</p>
          </div>
        </div>
      </nav>

      {/* filters*/}
      <div className="content w-full bg-white h-fit rounded-2xl p-4 md:mt-16 mt-24">
        <div className="flex items-center gap-2">
          <IoArrowBackCircleOutline size={24} />
          <p className="text-lg font-semibold">Auction History</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-2">
          <SelectBox
            items={auctions}
            onChange={handleAuctionSelectionChange}
            allTitle="Any Auction"
            title="Auction"
          />

          <SelectBox
            items={colors}
            onChange={handleAuctionSelectionChange}
            allTitle="All Colors"
            title="Color"
          />

          <SelectBox
            items={auctionGrades}
            onChange={handleAuctionSelectionChange}
            allTitle="All Grades"
            title="Grade"
          />

          <SelectBox
            items={vehicleGrades}
            onChange={handleAuctionSelectionChange}
            allTitle="All Grades"
            title="Vehicle Grade"
          />

          <div className="w-full md:w-fit">
            <div className="w-full md:w-fit">
              <p className="font-semibold text-base mb-2">Registration date</p>
              <div className="flex gap-2 border border-gray-200 rounded-md p-3">
                <div>
                  <p className="font-semibold text-base mb-2">From</p>
                  <input
                    type="number"
                    className="w-full md:w-[150px] border border-gray-200 rounded-md px-2 py-1"
                  />
                </div>
                <div>
                  <p className="font-semibold text-base mb-2">To</p>
                  <input
                    type="number"
                    className="w-full md:w-[150px] border border-gray-200 rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </div>

            <div className="w-fit mt-2">
              <p className="font-semibold text-base mb-2">Mileage</p>
              <div className="flex gap-2 border border-gray-200 rounded-md p-3">
                <div>
                  <p className="font-semibold text-base mb-2">From</p>
                  <input
                    type="number"
                    className="w-full md:w-[150px] border border-gray-200 rounded-md px-2 py-1"
                  />
                </div>
                <div>
                  <p className="font-semibold text-base mb-2">To</p>
                  <input
                    type="number"
                    className="w-full md:w-[150px] border border-gray-200 rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <SelectBox
            items={status}
            onChange={handleAuctionSelectionChange}
            allTitle="All Status"
            title="Status"
          />
        </div>
      </div>

      {/* filter box */}
      <div className="filterBox w-full bg-white h-fit rounded-2xl p-4 mt-4 flex md:flex-nowrap flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <IoMdCar size={24} />
          <span className="bg-gray-100 px-2 font-semibold rounded-md">10</span>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            className="border border-gray-300 rounded-md w-full p-3 py-2 pb-1"
          />
          <span className="absolute top-0 left-2 text-xs bg-white px-1 -translate-y-1/2 text-gray-500">
            Field List
          </span>
        </div>

        <div className="relative w-full md:w-[200px]">
          <Dropdown
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.value)}
            options={sortOptions}
            optionLabel="name"
            placeholder="Select Order"
            className="w-full bg-white"
          />
          <span className="absolute top-0 left-2 text-xs bg-white px-1 -translate-y-1/2 text-gray-500">
            Order By
          </span>
        </div>
      </div>

      {/* table */}
      <div className="content w-full bg-white h-fit rounded-2xl p-4 my-4 overflow-auto md:overflow-visible">
        <table className="w-full">
          <tr className="border-b shadow-2xs border-gray-200 bg-amber-50 sticky md:top-14 z-10">
            <td className={`font-semibold ` + tableColClass}>
              <input type="checkbox" />
            </td>
            <td className={`font-semibold ` + tableColClass}>Auction Images</td>
            <td className={`font-semibold ` + tableColClass}>Lot number</td>
            <td className={`font-semibold ` + tableColClass}>
              Auction Date/
              <br />
              Auction name
            </td>
            <td className={`font-semibold ` + tableColClass}>Make</td>
            <td className={`font-semibold ` + tableColClass}>Model</td>
            <td className={`font-semibold ` + tableColClass}>Year</td>
            <td className={`font-semibold ` + tableColClass}>Chassis</td>
            <td className={`font-semibold ` + tableColClass}>Engine CC</td>
            <td className={`font-semibold ` + tableColClass}>Color</td>
            <td className={`font-semibold ` + tableColClass}>Mileage</td>
            <td className={`font-semibold ` + tableColClass}>
              Vehicle <br /> Grade
            </td>
            <td className={`font-semibold ` + tableColClass}>
              Auction <br /> Grade
            </td>
            <td className={`font-semibold ` + tableColClass}>
              Start <br /> Sold/Not Sold
            </td>
            <td className={`font-semibold px-2 text-center`}>Status</td>
          </tr>
          {/* Loop 20 sample rows */}
          {Array.from({ length: 20 }, (_, index) => (
            <DataRow key={index} />
          ))}
        </table>
      </div>
    </section>
  );
}

export default AuctionHistory;
