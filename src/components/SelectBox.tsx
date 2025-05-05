const SelectBox = ({ items }: { items: string[] }) => {
  return (
    <div className="border border-gray-200 rounded-md">
      <div className="row flex items-center justify-between gap-2 p-4 py-2 hover:bg-gray-50 cursor-pointer">
        <input type="checkbox" />
        <p className="w-full text-left">-- Any Auction --</p>
        <span className="bg-gray-100 px-1 rounded-md">120</span>
      </div>
      {items.map((item, idx) => (
        <div className="row flex items-center justify-between gap-2 p-4 py-2 hover:bg-gray-50 cursor-pointer" key={idx}>
          <input type="checkbox" />
          <p className="w-full text-left">{item}</p>
          <span className="bg-gray-100 px-1 rounded-md">10</span>
        </div>
      ))}
    </div>
  );
};

export default SelectBox;
