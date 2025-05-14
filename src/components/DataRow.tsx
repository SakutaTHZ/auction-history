import { BsFillStarFill } from "react-icons/bs";
import StatusBullet from "../components/StatusBullet";
import {
  auctionGrades,
  auctions,
  colors,
  status,
  vehicleGrades,
} from "../assets/dataFile";

const DataRow = () => {
  const tableColClass = "border-r border-gray-200 px-2 py-1 text-center";
  const getRandomStatus = (): string => {
    const randomstatus = status[Math.floor(Math.random() * status.length)];
    return randomstatus;
  };

  return (
    <tr className="border-b border-gray-200 odd:bg-gray-50 hover:bg-yellow-50">
      <td className={`text-center ` + tableColClass}>
        <input type="checkbox" />
      </td>
      <td className={`text-center ` + tableColClass}>
        <div className="w-full flex items-center justify-center gap-2">
          <div className="w-[128px] grid grid-cols-2 gap-1">
            <img
              src="https://jdm-images-h8dpgscqbja0azg4.z02.azurefd.net/auction/2025-05-01/250736840_2b1fe6.jpg?preset=BigImage"
              alt="Auction"
              className="w-full aspect-square object-cover"
            />
            <img
              src="https://jdm-images-h8dpgscqbja0azg4.z02.azurefd.net/auction/2025-05-01/250736841_06ae03.jpg?preset=BigImage"
              alt="Auction"
              className="w-full aspect-square object-cover"
            />
            <img
              src="https://jdm-images-h8dpgscqbja0azg4.z02.azurefd.net/auction/2025-05-01/250736846_dec087.jpg?preset=BigImage"
              alt="Auction"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </td>
      <td className={`text-center ` + tableColClass}>
        <span className="font-semibold px-3 py-1 bg-gray-100 rounded-md cursor-pointer">
          30178
        </span>
      </td>
      <td className={`text-center ` + tableColClass}>
        <p>30-2-2030</p>
        <p className="text-gray-400">
          [<span>11:11</span>]
        </p>
        <p className="font-medium">{auctions[Math.floor(Math.random() * auctions.length)]}</p>
      </td>
      <td className={`text-center ` + tableColClass}>Honda</td>
      <td className={`text-center ` + tableColClass}>Accord</td>
      <td className={`text-center ` + tableColClass}>2021</td>
      <td className={`text-center ` + tableColClass}>CV3-1417713</td>
      <td className={`text-center ` + tableColClass}>
        <span>{"2,150"}</span>
        <span className="ml-2 text-gray-400">cc</span>
      </td>
      <td className={`text-center ` + tableColClass}>
        <div className="w-full flex justify-center items-center gap-1">
          <span
            className={`w-4 h-4 rounded-full border bg-white border-gray-200`}
          ></span>
          <p className="capitalize">{colors[Math.floor(Math.random() * colors.length)]}</p>
        </div>
      </td>
      <td className={`text-center ` + tableColClass}>100,000</td>
      <td className={`text-center ` + tableColClass}>
        <div className="flex justify-center items-center">
        <p className="flex justify-center items-center gap-1 w-16 text-wrap">{vehicleGrades[Math.floor(Math.random() * vehicleGrades.length)]}</p>
        </div>
      </td>
      <td className={`text-center ` + tableColClass}>
        <p className="flex justify-center items-center gap-1">
          <BsFillStarFill className="text-yellow-500" />
          {auctionGrades[Math.floor(Math.random() * auctionGrades.length)]}
        </p>
      </td>

      <td className={`text-center ` + tableColClass}>
        <div>
          <div className="flex gap-2 items-center justify-center text-gray-400">
            100,000 <span>¥</span>
          </div>
          <div className="flex gap-2 items-center justify-center text-green-700 font-semibold">
            100,000 <span>¥</span>
          </div>
        </div>
      </td>
      <td className={`text-center ` + tableColClass}>
        <div className="flex items-center justify-center gap-2">
          <StatusBullet status={getRandomStatus()} />
        </div>
      </td>
    </tr>
  );
};
export default DataRow;
