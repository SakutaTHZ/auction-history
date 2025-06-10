import CNetAdminNav from "../../components/AdminNav/CNetAdminNav";
import cosmoLogo from "../../assets/CosmoLogo.svg";
import { BiCar, BiDownload, BiMenu } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import {
  auctions,
  carMakes,
  carModels,
  chassisNumbers,
  customers,
  faxLabels,
  regions,
  vessels,
  yardname,
} from "../../assets/dataFile";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";
import PapersTableRow from "./PapersTableRow";
import OCRTableRow from "./OCRTableRow";

const subHamburgerStyle = "text-nowrap p-2 h-full hover:bg-amber-100 text-base";
const tableColStyle = ` px-1 py-2 text-gray-700 border-e border-gray-100 text-left text-sm align-top`;

const viewOptions: string[] = ["Papers", "OCR"];
const exportOptions: string[] = ["Papers", "To JFA"];
const extraOptions = [
  { label: "Doc not change", value: "doc_not_change" },
  { label: "No ETY", value: "no_ety" },
  { label: "Need Plates", value: "need_plates" },
  { label: "Has Plates", value: "has_plates" },
];

function getRandomDate(): Date {
  const day = Math.floor(Math.random() * 28) + 1;
  const monthIndex = Math.floor(Math.random() * 12);
  const year = new Date().getFullYear(); // or customize as needed

  return new Date(year, monthIndex, day);
}

export interface PaperData {
  boughtDate: Date;
  auction: string;
  lot: string;
  customer: string;
  region: string;
  make: string;
  model: string;
  chassis: string;
  cc: string;
  fax: string;
  sentDate: Date;
  pDate: Date;
  original: string;
  originalDate: Date;
  changeToDate: Date;
  exportDate: Date;
  month: Date;
  vehicleFormat: string;
  vehicleLength: string;
  vehicleWidth: string;
  vehicleHeight: string;
  weight: string;
  locked: boolean;
  tdn: string;
  regKm: string;
  accessories: string;
  comment: string;
  transporter: string;
  ety: Date;
  etyYard: string;
  vessel: string;
  etdPort: string;
  checkedBy?: string; // Optional field for OCR
  detected?: number; // Optional field for OCR
  checkedDate?: Date; // Optional field for OCR
  checkedTime?: string; // Optional field for OCR
}

const generateRandomData = (): PaperData => ({
  boughtDate: getRandomDate(),
  auction: auctions[Math.floor(Math.random() * auctions.length)],
  lot: `${Math.floor(Math.random() * 10000)} / ${Math.floor(Math.random() * 10000)}`,
  customer: customers[Math.floor(Math.random() * customers.length)],
  region: regions[Math.floor(Math.random() * regions.length)],
  make: carMakes[Math.floor(Math.random() * carMakes.length)],
  model: carModels[Math.floor(Math.random() * carModels.length)],
  chassis: chassisNumbers[Math.floor(Math.random() * chassisNumbers.length)],
  cc: `${Math.floor(Math.random() * 3000)}`,
  fax: faxLabels[Math.floor(Math.random() * faxLabels.length)],
  sentDate: getRandomDate(),
  pDate: getRandomDate(),
  original: faxLabels[Math.floor(Math.random() * faxLabels.length)],
  originalDate: getRandomDate(),
  changeToDate: getRandomDate(),
  exportDate: getRandomDate(),
  month: getRandomDate(),
  vehicleFormat: `${Math.floor(Math.random() * 1000)} x ${Math.floor(Math.random() * 1000)} x ${Math.floor(Math.random() * 1000)}`,
  vehicleLength: `${Math.floor(Math.random() * 1000)}`,
  vehicleWidth: `${Math.floor(Math.random() * 1000)}`,
  vehicleHeight: `${Math.floor(Math.random() * 1000)}`,
  weight: `${Math.floor(Math.random() * 3000)}`,
  locked: Math.random() < 0.5,
  tdn: `${Math.floor(Math.random() * 10000)}`,
  regKm: `${Math.floor(Math.random() * 1000000).toLocaleString()}`,
  accessories: Math.random() < 0.5 ? "メンテ、取、Rキー>>Sent to yard(2025/02/27)" : "",
  comment: Math.random() < 0.5 ? "★抹消ストップ★" : "",
  transporter: "JFA",
  ety: getRandomDate(),
  etyYard: yardname[Math.floor(Math.random() * yardname.length)],
  vessel: (vessels[Math.floor(Math.random() * vessels.length)].split("]").pop() ?? "").trim(),
  etdPort: "HAK",
  checkedBy: Math.random() < 0.4 ? "CJP Mayumi" : "",
  detected: Math.random() < 0.4 ? Math.floor(Math.random() * 20) + 1 : 0,
  checkedDate: new Date(new Date().getTime() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)),
  checkedTime: new Date(new Date().getTime() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }),
});

function Papers() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const [selecteedVessel, setSelectedVessel] = useState(vessels[0]);
  const [vesselCheck, setVesselCheck] = useState(false);

  const [selectedViewOption, setSelectedViewOption] = useState(viewOptions[0]);

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const [selectedExtraOptions, setSelectedExtraOptions] = useState<string[]>(
    []
  );
  const [textFilter, setTextFilter] = useState("");

  const [selectedExportOption, setSelecteedExportOption] = useState(
    exportOptions[0]
  );

  const [papersData, setPapersData] = useState<PaperData[]>([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < 20; i++) {
      generated.push(generateRandomData());
    }
    setPapersData(generated);
  }, []);

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

        {/* Status */}
        {selectedViewOption == "OCR" && (
          <div className="flex flex-col gap-2 w-fit">
            <label
              htmlFor="regions"
              className="text-nowrap text-sm text-gray-600"
            >
              Status
            </label>
            <div className="flex items-center gap-1">
              <Dropdown
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.value)}
                options={["-", "Needs Review", "Double Check", "Completed"]}
                optionLabel="View Option"
                placeholder="Papers"
                className="w-full md:w-14rem custom-dropdown"
              />
            </div>
          </div>
        )}

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
      <div className="tableContainer w-full max-h-[calc(100vh-4rem)] overflow-auto">
        {selectedViewOption == "OCR" ? (
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-[#F8F4ED] z-10">
              <tr className="bg-[#F8F4ED] h-16">
                <th className={`font-semibold ${tableColStyle} px-2`}>#</th>
                <th className={`font-semibold ${tableColStyle} px-2 min-w-[150px]`}>
                  Bought
                  <br />
                  Date
                </th>
                <th className={`font-semibold ${tableColStyle} px-2 min-w-[150px]`}>
                  Customer/
                  <br />
                  Region
                </th>
                <th className={`font-semibold ${tableColStyle} px-2 min-w-[150px]`}>
                  Make/
                  <br />
                  Model
                </th>
                <th className={`font-semibold ${tableColStyle} px-2 `}>
                  Chassis No.
                </th>
                <th className={`font-semibold ${tableColStyle} px-2 min-w-[150px]`}>
                  ETD Port
                </th>
                <th className={`font-semibold ${tableColStyle} px-2 min-w-[150px]`}>
                  Vessel
                </th>
                <th className={`font-semibold ${tableColStyle} px-2 min-w-[150px]`}>
                  Detected
                </th>
              </tr>
            </thead>

            <tbody>
              {papersData.map((data, i) => (
                <OCRTableRow key={i} index={i + 1} data={data} />
              ))}
            </tbody>
          </table>
        ) : (
          <table className="min-w-max table-auto">
            <thead className="sticky top-0 bg-[#F8F4ED] z-10">
              <tr className="bg-[#F8F4ED] h-16">
                <th className={`font-semibold ${tableColStyle}`}>#</th>
                <th className={`font-semibold ${tableColStyle} `}>
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
                <th className={`font-semibold ${tableColStyle}`}>
                  Accessories
                </th>
                <th className={`font-semibold ${tableColStyle}`}>Comment</th>
                <th className={`font-semibold ${tableColStyle}`}>
                  Transporter
                </th>
                <th className={`font-semibold ${tableColStyle}`}>ETY Yard</th>
                <th className={`font-semibold ${tableColStyle}`}>Vessel</th>
                <th className={`font-semibold ${tableColStyle}`}>ETD Port</th>
              </tr>
            </thead>

            <tbody>
              {papersData.map((data, i) => (
                <PapersTableRow
                  key={i}
                  index={i + 1}
                  initialData={data}
                  tableColStyle={tableColStyle}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Papers;
