import CNetAdminNav from "../../components/AdminNav/CNetAdminNav";
import cosmoLogo from "../../assets/CosmoLogo.svg";
import { BiCar, BiDownload, BiEdit, BiMenu } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CgCheckR, CgProfile } from "react-icons/cg";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import {
  auctions,
  carMakes,
  carModels,
  chassisNumbers,
  customers,
  regions,
  vessels,
  yardname,
} from "../../assets/dataFile";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";

const subHamburgerStyle = "text-nowrap p-2 h-full hover:bg-amber-100 text-base";
const tableColStyle = `px-2 py-2 text-gray-600 border-e border-gray-200 text-left`;

const viewOptions: string[] = ["Papers", "OCR"];
const exportOptions: string[] = ["Papers", "To JFA"];
const extraOptions = [
  { label: "Doc not change", value: "doc_not_change" },
  { label: "No ETY", value: "no_ety" },
  { label: "Need Plates", value: "need_plates" },
  { label: "Has Plates", value: "has_plates" },
];

function getRandomDateShort() {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = Math.floor(Math.random() * 28) + 1; // Keep it safe for all months
  const monthIndex = Math.floor(Math.random() * 12);

  return `${day.toString().padStart(2, "0")} ${months[monthIndex]}`;
}

function PapersTableRow({ index }: { index: number }) {
  return (
    <tr className="border-b border-gray-200 even:bg-gray-50 hover:bg-[#F8F4ED80]">
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-center">
          <p>{index}</p>
          <button>
            <BiEdit className="text-gray-500" />
          </button>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">{getRandomDateShort()}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black font-medium text-left">
            {auctions[Math.floor(Math.random() * (auctions.length - 1))]}
          </p>
          <p>
            {Math.floor(Math.random() * 10000)}/
            {Math.floor(Math.random() * 10000)}
          </p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {customers[Math.floor(Math.random() * (customers.length - 1))]}
          </p>
          <p>{regions[Math.floor(Math.random() * (regions.length - 1)) + 1]}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {carMakes[Math.floor(Math.random() * (carMakes.length - 1))]}
          </p>
          <p>{carModels[Math.floor(Math.random() * (carModels.length - 1))]}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {
              chassisNumbers[
                Math.floor(Math.random() * (chassisNumbers.length - 1))
              ]
            }
          </p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {Math.floor(Math.random() * 10000)}
          </p>
          <p>p</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left text-nowrap">登録</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">-</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left text-nowrap">{getRandomDateShort()}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">登録</p>
          <p className="text-black text-left text-nowrap">{getRandomDateShort()}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">登録</p>
          <p className="text-black text-left text-nowrap">{getRandomDateShort()}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left text-nowrap">{getRandomDateShort()}</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left text-nowrap">{getRandomDateShort()}</p>
          <p className="text-black text-left text-nowrap">(平成22年)</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {Math.floor(Math.random() * 1000)} x{" "}
            {Math.floor(Math.random() * 1000)} x{" "}
            {Math.floor(Math.random() * 1000)}
          </p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {Math.floor(Math.random() * 10000)}
          </p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-center">
          {Math.random() < 0.5 && <CgCheckR />}
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {Math.floor(Math.random() * 100000)}-
            {Math.floor(Math.random() * 1000)}
          </p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">
            {Math.floor(Math.random() * 1000000).toLocaleString()}
          </p>
          <p>km</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          {Math.random() < 0.5 && "メンテ、取、Rキー>>Sent to yard(2025/02/27)"}
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          {Math.random() < 0.5 && "★抹消ストップ★"}
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left">JFA</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p>{getRandomDateShort()}</p>
          <p className="text-black text-left w-fit">
            {yardname[Math.floor(Math.random() * (yardname.length - 1)) + 1]}
          </p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black text-left w-fit">
            {vessels[Math.floor(Math.random() * (vessels.length - 1)) + 1]
              .split("]")
              .pop()
              ?.trim()}
          </p>
          <p>V.0002A</p>
        </div>
      </td>
      <td className={`${tableColStyle}`}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-nowrap">{getRandomDateShort()}</p>
          <p className="text-black text-left w-fit">HAK</p>
        </div>
      </td>
    </tr>
  );
}

function Papers() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const [selecteedVessel, setSelectedVessel] = useState(vessels[0]);
  const [vesselCheck, setVesselCheck] = useState(false);

  const [selectedViewOption, setSelectedViewOption] = useState(viewOptions[0]);

  const [selectedExtraOptions, setSelectedExtraOptions] = useState<string[]>(
    []
  );
  const [textFilter, setTextFilter] = useState("");

  const [selectedExportOption, setSelecteedExportOption] = useState(
    exportOptions[0]
  );

  return (
    <>
      <CNetAdminNav />
      {/* Nav Bar */}
      <div className="px-12 py-2 flex flex-wrap justify-between items-center">
        <img src={cosmoLogo} alt="" className="h-12" />
        <div className="flex flex-col justify-center items-center bg-gray-50 text-blue-900 py-2 px-6 rounded-2xl">
          <BiCar size={20} />
          <p className="font-semibold">Stock</p>
        </div>
        <div className="flex items-center gap-2 text-black">
          <BsClock size={20} /> <p>Japan Time</p> <p>11:11 AM</p>{" "}
          <CgProfile size={20} /> <p>Test-Dev</p>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className=" relative bg-gray-50 flex gap-2 items-center justify-between">
        <div className="p-2 flex gap-2 items-center">
          <BiMenu size={24} />
          <p>Menu</p>
        </div>
        {/* Sub Hamburger Menu */}
        <div className="w-full h-full flex overflow-auto custom-scrollbar">
          <a href="/papers" className={`${subHamburgerStyle} bg-[#FFC158]`}>
            Office
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Bought
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Payment
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Payment(new)
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Payment UK
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Yard
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Papers
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Shipping
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Containers
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Recycle Fees
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Car Tax
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Parcels
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            X Rates
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            NewsLetter
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            User Admin
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            TCV Upload
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Calc
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            Cost Manager
          </a>
          <a href="/papers" className={`${subHamburgerStyle}`}>
            CUK Upload
          </a>
          <a
            href="/papers"
            className={`${subHamburgerStyle} text-blue-900 hilightedNav`}
          >
            News Paper
          </a>
        </div>
        <div className="p-2 flex gap-2 items-center bg-[#FFC158]">
          <p className="text-nowrap pl-4">My Home</p>
          <BiMenu size={24} />
        </div>
      </div>

      {/* Filters */}
      <div className="py-4 px-10 flex gap-2 items-end w-full">
        {/* Regions */}
        <div className="flex flex-col gap-2 w-fit">
          <label
            htmlFor="regions"
            className="text-nowrap text-sm text-gray-600"
          >
            Regions
          </label>

          <div className="flex items-center gap-1">
            <Dropdown
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.value)}
              options={regions}
              optionLabel="Regions"
              placeholder="-- Any Region --"
              className="w-full md:w-14rem custom-dropdown"
            />
          </div>
        </div>
        {/* Vessel */}
        <div className="flex flex-col gap-2 w-fit">
          <label
            htmlFor="regions"
            className="text-nowrap text-sm text-gray-600"
          >
            Vessel
          </label>
          <div className="flex items-center gap-1">
            <Dropdown
              value={selecteedVessel}
              onChange={(e) => setSelectedVessel(e.value)}
              options={vessels}
              optionLabel="Vessel"
              placeholder="-- Any Vessel --"
              className="w-full md:w-14rem custom-dropdown"
            />
            <Checkbox
              onChange={(e) => setVesselCheck(e.checked ?? false)}
              checked={vesselCheck}
            ></Checkbox>
          </div>
        </div>

        {/* View Option */}
        <div className="flex flex-col gap-2 w-fit">
          <label
            htmlFor="regions"
            className="text-nowrap text-sm text-gray-600"
          >
            View Option
          </label>
          <div className="flex items-center gap-1">
            <Dropdown
              value={selectedViewOption}
              onChange={(e) => setSelectedViewOption(e.value)}
              options={viewOptions}
              optionLabel="View Option"
              placeholder="Papers"
              className="w-full md:w-14rem custom-dropdown"
            />
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex flex-col gap-2 w-fit">
          <label
            htmlFor="regions"
            className="text-nowrap text-sm text-gray-600"
          >
            Extra Options
          </label>
          <div className="flex items-center gap-1">
            <MultiSelect
              value={selectedExtraOptions}
              onChange={(e) => setSelectedExtraOptions(e.value)}
              options={extraOptions}
              optionLabel="label"
              placeholder="Select Extra Options"
              maxSelectedLabels={1}
              className="w-full md:w-20rem custom-dropdown rounded-md"
            />
          </div>
        </div>

        {/* Free Text Filter */}
        <div className="flex w-full h-full justify-end">
          <input
            placeholder="Free Text Filter"
            className="border border-gray-300 rounded-md h-9 px-2 w-full outline-0"
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
          />
        </div>

        {/* Export */}
        <div className="flex flex-col gap-2 w-fit">
          <label
            htmlFor="regions"
            className="text-nowrap text-sm text-gray-600"
          >
            Export
          </label>
          <div className="flex items-center gap-1">
            <Dropdown
              value={selectedExportOption}
              onChange={(e) => setSelecteedExportOption(e.value)}
              options={exportOptions}
              optionLabel="exportoption"
              placeholder="-"
              className="w-full md:w-14rem custom-dropdown"
            />
            <button className="bg-blue-500 p-2 rounded-md text-white">
              <BiDownload size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="tableContainer w-full overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F8F4ED]">
              <th className={`font-semibold ${tableColStyle}`}>#</th>
              <th className={`font-semibold ${tableColStyle}`}>
                Bought
                <br />
                Date
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                Auction/
                <br />
                Lot No.
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                Customer/
                <br />
                Region
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                Make/
                <br />
                Model
              </th>
              <th className={`font-semibold ${tableColStyle}`}>Chassis</th>
              <th className={`font-semibold ${tableColStyle}`}>CC</th>
              <th className={`font-semibold ${tableColStyle}`}>Fax</th>
              <th className={`font-semibold ${tableColStyle}`}>
                Sent
                <br />
                Date
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                P<br />
                Date
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                Original
                <br />
                /Date
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                Change To/
                <br />
                /Date
              </th>
              <th className={`font-semibold ${tableColStyle}`}>
                Export
                <br />
                Date
              </th>
              <th className={`font-semibold ${tableColStyle}`}>Month</th>
              <th className={`font-semibold ${tableColStyle}`}>
                Vehicle Format
                <br />
                (LxWxH)
              </th>
              <th className={`font-semibold ${tableColStyle}`}>Weight</th>
              <th className={`font-semibold ${tableColStyle}`}>Locked</th>
              <th className={`font-semibold ${tableColStyle}`}>TDN</th>
              <th className={`font-semibold ${tableColStyle}`}>
                Reg
                <br />
                Km
              </th>
              <th className={`font-semibold ${tableColStyle}`}>Accessories</th>
              <th className={`font-semibold ${tableColStyle}`}>Comment</th>
              <th className={`font-semibold ${tableColStyle}`}>Transporter</th>
              <th className={`font-semibold ${tableColStyle}`}>ETY Yard</th>
              <th className={`font-semibold ${tableColStyle}`}>Vessel</th>
              <th className={`font-semibold ${tableColStyle}`}>ETD Port</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(20)].map((_, i) => (
              <PapersTableRow key={i} index={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Papers;
