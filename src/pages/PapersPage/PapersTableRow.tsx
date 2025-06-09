import React, { useState } from "react";
import { BiEdit, BiSave } from "react-icons/bi";
import { CgCheckR } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { faxLabels } from "../../assets/dataFile";

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
      <span>{value}</span>
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
        <span className="text-black relative group">
          {auction}
          <div className="absolute border border-gray-200 -top-1/2 left-full bg-white z-10 p-2 shadow-lg rounded-md opacity-0 -translate-x-12 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <div className="px-2 text-gray-600 text-nowrap text-left">
                  Contact
                </div>
                <div className="px-2 text-nowrap text-right">dddd</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="px-2 text-gray-600 text-nowrap text-left">
                  Phone
                </div>
                <div className="px-2 text-nowrap text-right">072-826-3486</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="px-2 text-gray-600 text-nowrap text-left">
                  Fax
                </div>
                <div className="px-2 text-nowrap text-right">043-297-1600</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="px-2 text-gray-600 text-nowrap text-left">
                  Cust No
                </div>
                <div className="px-2 text-nowrap text-right">25998</div>
              </div>
            </div>
          </div>
        </span>
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
            <span>{formatShortDate(originalDate)}</span>
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
              <span className="text-nowrap">{vehicleLength} x</span>
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
              <span className="text-nowrap">{vehicleWidth}</span>
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
              <span className="text-nowrap">x {vehicleHeight}</span>
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

export default PapersTableRow;
