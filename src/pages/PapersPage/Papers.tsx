import CNetAdminNav from "../../components/AdminNav/CNetAdminNav";
import cosmoLogo from "../../assets/CosmoLogo.svg";
import { BiCar, BiDownload, BiEdit, BiMenu, BiSave } from "react-icons/bi";
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
  faxLabels,
  regions,
  vessels,
  yardname,
} from "../../assets/dataFile";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { GiCancel } from "react-icons/gi";

const subHamburgerStyle = "text-nowrap p-2 h-full hover:bg-amber-100 text-base";
const tableColStyle = `px-1 py-2 text-gray-700 border-e border-gray-100 text-left text-sm align-top`;

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
/*function parseShortDateString(dateStr: string): Date {
  const [day, monthStr] = dateStr.split(" ");
  const monthIndex = [
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
  ].indexOf(monthStr.toUpperCase());

  const year = new Date().getFullYear();

  return new Date(year, monthIndex, parseInt(day, 10));
}*/
function formatShortDate(date: Date): string {
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
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}

const generateRandomData = () => ({
  boughtDate: getRandomDate(),
  auction: `${auctions[Math.floor(Math.random() * auctions.length)]}`,
  lot: `${Math.floor(Math.random() * 10000)} / ${Math.floor(
    Math.random() * 10000
  )}`,
  customer: customers[Math.floor(Math.random() * customers.length)],
  region: regions[Math.floor(Math.random() * regions.length + 1)],
  make: carMakes[Math.floor(Math.random() * carMakes.length)],
  model: carModels[Math.floor(Math.random() * carModels.length)],
  chassis: chassisNumbers[Math.floor(Math.random() * chassisNumbers.length)],
  cc: `${Math.floor(Math.random() * 3000)}`,
  fax: faxLabels[Math.floor(Math.random() * faxLabels.length + 1)],
  sentDate: getRandomDate(),
  pDate: getRandomDate(),
  original: faxLabels[Math.floor(Math.random() * faxLabels.length + 1)],
  originalDate: getRandomDate(),
  changeToDate: getRandomDate(),
  exportDate: getRandomDate(),
  month: getRandomDate(),
  vehicleFormat: `${Math.floor(Math.random() * 1000)} x ${Math.floor(
    Math.random() * 1000
  )} x ${Math.floor(Math.random() * 1000)}`,
  vehicleLength: `${Math.floor(Math.random() * 1000)}`,
  vehicleWidth: `${Math.floor(Math.random() * 1000)}`,
  vehicleHeight: `${Math.floor(Math.random() * 1000)}`,
  weight: `${Math.floor(Math.random() * 2000)}`,
  locked: Math.random() < 0.5,
  tdn: `${Math.floor(Math.random() * 10000)}`,
  regKm: `${Math.floor(Math.random() * 1000000).toLocaleString()}`,
  accessories:
    Math.random() < 0.5 ? "メンテ、取、Rキー>>Sent to yard(2025/02/27)" : "",
  comment: Math.random() < 0.5 ? "★抹消ストップ★" : "",
  transporter: "JFA",
  ety: getRandomDate(),
  etyYard: yardname[Math.floor(Math.random() * yardname.length)],
  vessel: (
    vessels[Math.floor(Math.random() * vessels.length)].split("]").pop() ?? ""
  ).trim(),
  etdPort: "HAK",
});

function formatDateWithEra(date: Date): string {
  if (!date || isNaN(date.getTime())) return "Invalid Date";

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });

  let era = "";

  const reiwaStart = new Date("2019-05-01");
  const heiseiStart = new Date("1989-01-08");

  if (date >= reiwaStart) {
    const reiwaYear = year - 2018; // Reiwa 1 is 2019
    era = `(令和${reiwaYear === 1 ? "元" : reiwaYear}年)`;
  } else if (date >= heiseiStart) {
    const heiseiYear = year - 1988; // Heisei 1 is 1989
    era = `(平成${heiseiYear}年)`;
  }

  return `${year}\n${era || "-"}\n${month}`;
}

type PapersTableRowData = {
  boughtDate: Date;
  sentDate: Date;
  pDate: Date;
  originalDate: Date;
  changeToDate: Date;
  exportDate: Date;
  auction: string;
  lot: string;
  customer: string;
  region: string;
  make: string;
  model: string;
  chassis: string;
  cc: string;
  fax: string;
  original: string;
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
  etyYard: string;
  ety: Date;
  vessel: string;
  etdPort: string;
};

interface PapersTableRowProps {
  index: number;
  initialData: PapersTableRowData;
  tableColStyle: string;
}

function PapersTableRow({
  index,
  initialData,
  tableColStyle,
}: PapersTableRowProps) {
  // States for all your data columns, initialized from props
  const [locked, setLocked] = useState(initialData.locked);
  const [boughtDate] = useState(initialData.boughtDate);
  const [auction, setAuction] = useState(initialData.auction);
  const [lot, setLot] = useState(initialData.lot);
  const [customer, setCustomer] = useState(initialData.customer);
  const [region, setRegion] = useState(initialData.region);
  const [make, setMake] = useState(initialData.make);
  const [model, setModel] = useState(initialData.model);
  const [chassis, setChassis] = useState(initialData.chassis);
  const [cc, setCc] = useState(initialData.cc);
  const [fax, setFax] = useState(initialData.fax);
  const [sentDate, setSentDate] = useState<Date>(initialData.sentDate);
  const [pDate, setPDate] = useState(initialData.pDate);
  const [original, setOriginal] = useState(initialData.original);
  const [originalDate, setOriginalDate] = useState(initialData.originalDate);
  const [changeToDate, setChangeToDate] = useState(initialData.changeToDate);
  const [exportDate, setExportDate] = useState(initialData.exportDate);
  const [month, setMonth] = useState<Date>(initialData.month);
  const [vehicleLength, setVehicleLength] = useState(initialData.vehicleLength);
  const [vehicleWidth, setVehicleWidth] = useState(initialData.vehicleWidth);
  const [vehicleHeight, setVehicleHeight] = useState(initialData.vehicleHeight);
  const [weight, setWeight] = useState(initialData.weight);
  const [tdn, setTdn] = useState(initialData.tdn);
  const [regKm, setRegKm] = useState(initialData.regKm);
  const [accessories, setAccessories] = useState(initialData.accessories);
  const [comment, setComment] = useState(initialData.comment);
  const [transporter, setTransporter] = useState(initialData.transporter);
  const [ety, setEty] = useState<Date>(initialData.ety);
  const [etyYard, setEtyYard] = useState(initialData.etyYard);
  const [vessel, setVessel] = useState(initialData.vessel);
  const [etdPort, setEtdPort] = useState(initialData.etdPort);

  const [isEditing, setIsEditing] = useState(false);

  const [vehicleFormatCheck, setVehicleFormatCheck] = useState(false);

  const resetAllData = () => {
    setLocked(initialData.locked);
    setChassis(initialData.chassis);
    setCc(initialData.cc);
    setFax(initialData.fax);
    setSentDate(initialData.sentDate);
    setPDate(initialData.pDate);
    setOriginal(initialData.original);
    setOriginalDate(initialData.originalDate);
    setChangeToDate(initialData.changeToDate);
    setExportDate(initialData.exportDate);
    setMonth(initialData.month);
    setVehicleLength(initialData.vehicleLength);
    setVehicleWidth(initialData.vehicleWidth);
    setVehicleHeight(initialData.vehicleHeight);
    setWeight(initialData.weight);
    setTdn(initialData.tdn);
    setRegKm(initialData.regKm);
    setAccessories(initialData.accessories);
    setComment(initialData.comment);
    setEty(initialData.ety);

    // Assuming you add setters for these too
    setAuction(initialData.auction);
    setLot(initialData.lot);
    setCustomer(initialData.customer);
    setRegion(initialData.region);
    setMake(initialData.make);
    setModel(initialData.model);
    setTransporter(initialData.transporter);
    setEtyYard(initialData.etyYard);
    setVessel(initialData.vessel);
    setEtdPort(initialData.etdPort);
  };

  // Helper to render input or text based on edit mode
  const renderCell = <T extends string>(
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>,
    locked: boolean,
    inputProps = {}
  ) =>
    isEditing ? (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value as T)}
        className="border w-full py-0.5 rounded border-gray-200 bg-white disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={locked}
        {...inputProps}
      />
    ) : (
      <p>{value}</p>
    );

  // Special rendering for Locked column (boolean checkmark)
  const renderLocked = () =>
    isEditing ? (
      <input
        type="checkbox"
        checked={locked}
        onChange={(e) => setLocked(e.target.checked)}
      />
    ) : locked ? (
      <CgCheckR className="text-green-600" />
    ) : (
      <></>
    );

  return (
    <tr
      className={`  transition-colors ${
        isEditing
          ? "bg-yellow-100 border-2 border-dotted border-amber-200"
          : "border-b border-gray-200 hover:bg-gray-100 even:bg-gray-50"
      }`}
    >
      <td className={`${tableColStyle} text-center`}>
        <div className="flex flex-col items-center justify-center gap-2">
          {index}
          <button
            className="text-gray-600 hover:text-blue-800 font-semibold cursor-pointer"
            onClick={() => setIsEditing(!isEditing)}
            aria-label={isEditing ? "Save row data" : "Edit row data"}
          >
            {isEditing ? (
              <div className="flex justify-center items-center flex-col gap-2">
                <BiSave size={18} className="text-green-600" />
              </div>
            ) : (
              <BiEdit size={18} />
            )}
          </button>
          {isEditing && (
            <button
              className="text-gray-600 hover:text-blue-800 font-semibold cursor-pointer"
              onClick={() => {
                resetAllData();
                setIsEditing(!isEditing);
              }}
              aria-label={isEditing ? "Save row data" : "Edit row data"}
            >
              <GiCancel size={16} className="text-red-600" />
            </button>
          )}
        </div>
      </td>

      <td className={`${tableColStyle} text-nowrap`}>
        {formatShortDate(boughtDate)}
      </td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{auction}</p>
        <p className=" text-gray-500">{lot}</p>
      </td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{customer}</p>
        <p className=" text-gray-500">{region}</p>
      </td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{make}</p>
        <p className=" text-gray-500">{model}</p>
      </td>

      <td className={`${tableColStyle}`}>
        {renderCell(chassis, setChassis, locked)}
      </td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{renderCell(cc, setCc, locked)}</p>
        <p className=" text-gray-500">p</p>
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Dropdown
            value={fax}
            onChange={(e) => setFax(e.value)}
            options={faxLabels}
            optionLabel="Fax"
            placeholder="-"
            className="w-full fax-dropdown text-sm"
          />
        ) : (
          <p>{fax}</p>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Calendar
            value={sentDate}
            onChange={(e) => {
              if (e.value) setSentDate(e.value);
            }}
            className="custom-calendar"
            pt={{
              root: { className: "text-xs p-0 w-full min-w-16" },
              input: {
                className: "text-xs px-0 py-0 rounded border border-gray-300",
              },
              panel: { className: "text-sm" },
            }}
          />
        ) : (
          <p className="text-nowrap">{formatShortDate(sentDate)}</p>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Calendar
            value={pDate}
            onChange={(e) => {
              if (e.value) setPDate(e.value);
            }}
            className="custom-calendar"
            pt={{
              root: { className: "text-xs p-0 w-full min-w-16" },
              input: {
                className: "text-xs px-0 py-0 rounded border border-gray-300",
              },
              panel: { className: "text-sm" },
            }}
          />
        ) : (
          <p className="text-nowrap">{formatShortDate(pDate)}</p>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Dropdown
            value={original}
            onChange={(e) => setOriginal(e.value)}
            options={faxLabels}
            optionLabel="Fax"
            placeholder="-"
            className="w-full fax-dropdown text-sm"
          />
        ) : (
          <p>{original}</p>
        )}
        <p className="pt-1">
          {isEditing ? (
            <Calendar
              value={originalDate}
              onChange={(e) => {
                if (e.value) setOriginalDate(e.value);
              }}
              className="custom-calendar"
              pt={{
                root: { className: "text-xs p-0 w-full min-w-16" },
                input: {
                  className: "text-xs px-0 py-0 rounded border border-gray-300",
                },
                panel: { className: "text-sm" },
              }}
            />
          ) : (
            <p>{formatShortDate(originalDate)}</p>
          )}
        </p>
        {isEditing && <input type="file" className="custom-file-input" />}
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Calendar
            value={changeToDate}
            onChange={(e) => {
              if (e.value) setChangeToDate(e.value);
            }}
            className="custom-calendar"
            pt={{
              root: { className: "text-xs p-0 w-full min-w-16" },
              input: {
                className: "text-xs px-0 py-0 rounded border border-gray-300",
              },
              panel: { className: "text-sm" },
            }}
          />
        ) : (
          <p>{formatShortDate(changeToDate)}</p>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Calendar
            value={exportDate}
            onChange={(e) => {
              if (e.value) setExportDate(e.value);
            }}
            className="custom-calendar"
            pt={{
              root: { className: "text-xs p-0 w-full min-w-16" },
              input: {
                className: "text-xs px-0 py-0 rounded border border-gray-300",
              },
              panel: { className: "text-sm" },
            }}
          />
        ) : (
          <p>{formatShortDate(exportDate)}</p>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Calendar
            value={month}
            onChange={(e) => {
              if (e.value instanceof Date) setMonth(e.value);
            }}
            dateFormat="dd M yy"
            className="custom-calendar disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            pt={{
              root: { className: "text-xs p-0 w-full min-w-16" },
              input: {
                className:
                  "text-xs px-0 py-0 rounded border border-gray-300 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
              },
              panel: { className: "text-sm" },
            }}
            disabled={locked}
          />
        ) : (
          <div className="whitespace-pre-line text-sm">
            {formatDateWithEra(month)}
          </div>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        <div className="grid grid-cols-2 gap-1">
          <p>
            {isEditing ? (
              <input
                type="text"
                value={vehicleLength}
                onChange={(e) => setVehicleLength(e.target.value)}
                className="border w-full py-0.5 rounded border-gray-200 bg-white"
              />
            ) : (
              <p className="text-nowrap">{vehicleLength} x</p>
            )}
          </p>
          <p>
            {isEditing ? (
              <input
                type="text"
                value={vehicleWidth}
                onChange={(e) => setVehicleWidth(e.target.value)}
                className="border w-full py-0.5 rounded border-gray-200 bg-white"
              />
            ) : (
              <p className="text-nowrap">{vehicleWidth}</p>
            )}
          </p>
          <p>
            {isEditing ? (
              <input
                type="text"
                value={vehicleHeight}
                onChange={(e) => setVehicleHeight(e.target.value)}
                className="border w-full py-0.5 rounded border-gray-200 bg-white"
              />
            ) : (
              <p className="text-nowrap">x {vehicleHeight}</p>
            )}
          </p>
          {isEditing && (
            <Checkbox
              onChange={(e) => setVehicleFormatCheck(e.checked ?? false)}
              checked={vehicleFormatCheck}
            ></Checkbox>
          )}
        </div>
      </td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{renderCell(weight, setWeight, locked)}</p>
        <p className=" text-gray-500">kg</p>
      </td>

      <td className={`${tableColStyle} text-center`}>
        <div className="flex items-center justify-center">{renderLocked()}</div>
      </td>

      <td className={`${tableColStyle}`}>{renderCell(tdn, setTdn, locked)}</td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{renderCell(regKm, setRegKm, locked)}</p>
        <p className=" text-gray-500">km</p>
      </td>

      <td className={`${tableColStyle} min-w-24 w-24`}>
        {isEditing ? (
          <textarea
            rows={4}
            value={accessories}
            onChange={(e) => setAccessories(e.target.value)}
            className="border w-full py-0.5 rounded border-gray-200 bg-white disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          />
        ) : (
          <p>{accessories}</p>
        )}
      </td>

      <td className={`${tableColStyle} min-w-24 w-24`}>
        {isEditing ? (
          <textarea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border w-full py-0.5 rounded border-gray-200 bg-white disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          />
        ) : (
          <p>{comment}</p>
        )}
      </td>

      <td className={`${tableColStyle}`}>
        <p className=" text-black">{transporter}</p>
      </td>

      <td className={`${tableColStyle}`}>
        {isEditing ? (
          <Calendar
            value={ety}
            onChange={(e) => {
              if (e.value) setEty(e.value);
            }}
            className="custom-calendar"
            pt={{
              root: { className: "text-xs p-0 w-full min-w-16" },
              input: {
                className: "text-xs px-0 py-0 rounded border border-gray-300",
              },
              panel: { className: "text-sm" },
            }}
          />
        ) : (
          <p>{formatShortDate(ety)}</p>
        )}
        <p className=" text-black">{etyYard}</p>
      </td>

      <td className={`${tableColStyle}`}>{vessel}</td>

      <td className={`${tableColStyle}`}>{etdPort}</td>
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
      <div className="tableContainer w-full max-h-[calc(100vh-4rem)] overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-[#F8F4ED] z-10">
            <tr className="bg-[#F8F4ED] h-16">
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
              <PapersTableRow
                key={i}
                index={i + 1}
                initialData={generateRandomData()}
                tableColStyle={tableColStyle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Papers;
