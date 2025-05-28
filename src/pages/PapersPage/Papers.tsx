import CNetAdminNav from "../../components/AdminNav/CNetAdminNav";
import cosmoLogo from "../../assets/CosmoLogo.svg";
import { BiCar, BiDownload, BiMenu } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { regions, vessels } from "../../assets/dataFile";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from 'primereact/multiselect';

const subHamburgerStyle = "text-nowrap p-2 h-full hover:bg-amber-100 text-base";

const viewOptions:string[] = [
    "Papers",
    "OCR"
]
const exportOptions:string[] = [
    "Papers",
    "To JFA"
]
const extraOptions = [
  { label: 'Doc not change', value: 'doc_not_change' },
  { label: 'No ETY', value: 'no_ety' },
  { label: 'Need Plates', value: 'need_plates' },
  { label: 'Has Plates', value: 'has_plates' }
];

function Papers() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const [selecteedVessel, setSelectedVessel] = useState(vessels[0]);
  const [vesselCheck, setVesselCheck] = useState(false);

    const [selectedViewOption,setSelectedViewOption] = useState(viewOptions[0]) 

    const [selectedExtraOptions, setSelectedExtraOptions] = useState<string[]>([])
    const [textFilter,setTextFilter] = useState("")

    const  [selectedExportOption, setSelecteedExportOption] = useState(exportOptions[0])

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
      <div className="py-3 px-10 flex gap-2 items-end w-full">
        {/* Regions */}
        <div className="flex flex-col gap-2 w-fit">
          <label htmlFor="regions" className="text-nowrap text-sm text-gray-600">Regions</label>

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
          <label htmlFor="regions" className="text-nowrap text-sm text-gray-600">Vessel</label>
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
          <label htmlFor="regions" className="text-nowrap text-sm text-gray-600">View Option</label>
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
          <label htmlFor="regions" className="text-nowrap text-sm text-gray-600">Extra Options</label>
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
          <input placeholder="Free Text Filter" className="border border-gray-300 rounded-md h-9 px-2 w-full outline-0" value={textFilter} onChange={(e)=> setTextFilter(e.target.value)}/>
        </div>

        {/* Export */}
        <div className="flex flex-col gap-2 w-fit">
          <label htmlFor="regions" className="text-nowrap text-sm text-gray-600">Export</label>
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
                <BiDownload size={16}/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Papers;
