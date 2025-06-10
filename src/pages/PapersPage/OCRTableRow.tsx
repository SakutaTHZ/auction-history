import DetectedColumn from "./DetectedColumn";
import { PaperData } from "./Papers";
const tableColStyle = ` px-2 py-2 text-gray-700 border-e border-gray-100 text-left text-sm align-top`;

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

const OCRTableRow = ({ index, data }: { index: number; data: PaperData }) => {
  console.log("OCRTableRow data:", data);

  return (
    <tr
      className={`  transition-colors border-b border-gray-200 hover:bg-gray-100 even:bg-gray-50`}
    >
      <td className={`${tableColStyle}`}>{index}</td>
      <td className={`${tableColStyle} text-center`}>
        {formatShortDate(data.boughtDate)}
      </td>
      <td className={`${tableColStyle}`}>
        <p className=" text-black">{data.customer}</p>
        <p className=" text-gray-500">{data.region}</p>
      </td>
      <td className={` ${tableColStyle}`}>
        <p className=" text-black">{data.make}</p>
        <p className=" text-gray-500">{data.model}</p>
      </td>
      <td className={` ${tableColStyle}`}>
        <p className=" text-black">{data.chassis}</p>
      </td>
      <td className={`${tableColStyle}`}>
        <p className=" text-gray-500">{formatShortDate(data.boughtDate)}</p>
        <p className="text-black ">{data.etdPort}</p>
      </td>
      <td className={`${tableColStyle}`}>
        <p className="text-black ">{data.vessel}</p>
      </td>
      <td className={`min-h-16 h-16 text-gray-700 border-e border-gray-100 text-left text-sm align-middle`}>
        <DetectedColumn detectedData={data} />
      </td>
    </tr>
  );
};

export default OCRTableRow;
