import { useEffect, useState } from "react";

interface SelectBoxProps {
  items: string[];
  allTitle?: string;
  title?: string;
  onChange?: (selected: string[]) => void;
}

const SelectBox = ({
  items,
  onChange,
  allTitle = "All Data",
  title = "Title",
}: SelectBoxProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const allSelected = selectedItems.length === items.length;

  const handleToggleItem = (item: string) => {
    setSelectedItems((prev) => {
      const updated = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];

      return updated;
    });
  };

  const handleToggleAll = () => {
    setSelectedItems((prev) =>
      prev.length === items.length ? [] : [...items]
    );
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedItems);
    }
  }, [selectedItems, onChange]);

  return (
    <div className="w-full md:w-fit">
      <p className="h-6 font-semibold text-base mb-2 flex justify-between">
        {title}{" "}
        {selectedItems.length != 0 && (
          <span className="bg-gray-50 px-2 rounded-full font-normal border border-gray-200 flex items-center">
            {selectedItems.length}
          </span>
        )}
      </p>
      <div className="border border-gray-200 rounded-md h-[225px] md:min-w-[250px] min-w-full overflow-y-auto custom-scrollbar">
        <div
          className={`row flex items-center justify-between gap-2 p-4 py-2 hover:bg-gray-50 cursor-pointer ${
            allSelected ? "bg-blue-100 hover:bg-blue-200" : ""
          }`}
          onClick={handleToggleAll}
        >
          <input type="checkbox" checked={allSelected} readOnly />
          <p className="w-full text-left font-medium">-- {allTitle} --</p>
          <span className="bg-gray-100 px-1 rounded-md">{items.length}</span>
        </div>

        {items.map((item, idx) => (
          <div
            className={`row flex items-center justify-between gap-2 p-4 py-2 cursor-pointer ${
              selectedItems.includes(item)
                ? "bg-blue-50 hover:bg-blue-100 "
                : "hover:bg-gray-50"
            }`}
            key={idx}
            onClick={() => handleToggleItem(item)}
          >
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              readOnly
            />
            <p className="w-full text-left">{item}</p>
            <span className="bg-gray-100 px-1 rounded-md">10</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
