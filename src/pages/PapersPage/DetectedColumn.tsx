import {
  IoWarningOutline,
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { LuFileSearch2 } from "react-icons/lu";
import { PaperData } from "./Papers";

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

const DetectedColumn = ({ detectedData }: { detectedData: PaperData }) => {
  return (
    <div
      className={`detected-column flex items-center justify-between w-full h-full px-2 ${
        (detectedData.detected ?? 0) === 0
          ? "bg-green-50 text-green-600"
          : (detectedData.detected ?? 0) < 10
          ? "bg-yellow-50 text-yellow-600"
          : "bg-red-50 text-red-600"
      } rounded-md shadow-xs`}
    >
      <div className="flex items-center justify-center h-full gap-1">
        {(detectedData.detected ?? 0) === 0 ? (
          <IoCheckmarkCircleOutline size={16} />
        ) : (detectedData.detected ?? 0) < 10 ? (
          <IoInformationCircleOutline size={16} />
        ) : (
          <IoWarningOutline size={16} />
        )}
        <span className="font-semibold">{detectedData.detected ?? 0}</span>
      </div>
      {detectedData.checkedBy != "" ? (
        <div className="flex flex-col items-end justify-center h-full gap-1">
          <p className="text-black">{detectedData.checkedBy}</p>
          <div className="flex items-center justify-center gap-1">
            <p className="text-black">
              {detectedData.checkedDate
                ? formatShortDate(detectedData.checkedDate)
                : "N/A"}
            </p>
            <p className="text-gray-500">
              [{detectedData.checkedTime ? detectedData.checkedTime : "N/A"}]
            </p>
          </div>
        </div>
      ) : (
        <button className="flex items-center px-2 py-1 border border-gray-200 bg-white rounded-md shadow-2xs text-gray-600 gap-1 cursor-pointer hover:bg-gray-50 transition-colors">
          <LuFileSearch2 />
          <span>Compare</span>
        </button>
      )}
    </div>
  );
};

export default DetectedColumn;
