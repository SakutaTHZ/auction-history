import { CgProfile } from "react-icons/cg";
import "./App.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import SelectBox from "./components/SelectBox";
import { auctions } from "./assets/dataFile";

function App() {
  const handleAuctionSelectionChange = (selected: string[]) => {
    console.log("Selected:", selected);
  };

  return (
    <section className="bg-gray-100 h-screen overflow-hidden px-6">
      {/* nav bar */}
      <nav className="nav w-full flex justify-between items-center py-4 gap-8">
        <h1 className="logo font-semibold text-lg text-nowrap">JDM Wheels</h1>
        <ul className="w-full flex gap-8 items-center">
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
            <a href="#" className="bg-amber-200 p-2 px-4 rounded-xl">
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

      {/* content*/}
      <div className="content w-full bg-white h-fit rounded-2xl p-4">
        <div className="flex items-center gap-2">
          <IoArrowBackCircleOutline size={24} />
          <p className="text-lg font-semibold">Auction History</p>
        </div>
        <div className="flex gap-4 mt-2">
          <div>
            <p className="font-semibold text-base mb-2">Auction</p>
            <SelectBox items={auctions} onChange={handleAuctionSelectionChange} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
