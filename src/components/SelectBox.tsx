import { useEffect, useState } from "react";

interface SelectBoxProps {
  items: string[];
  onChange?: (selected: string[]) => void;
}

const SelectBox = ({ items, onChange }: SelectBoxProps) => {
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
    setSelectedItems((prev) => (prev.length === items.length ? [] : [...items]));
  };

  // Emit to parent when selection changes
  useEffect(() => {
    if (onChange) {
      onChange(selectedItems);
    }
  }, [selectedItems, onChange]);

  return (
    <div className="border border-gray-200 rounded-md h-[200px] overflow-y-auto">
      <div
        className="row flex items-center justify-between gap-2 p-4 py-2 hover:bg-gray-50 cursor-pointer"
        onClick={handleToggleAll}
      >
        <input
          type="checkbox"
          checked={allSelected}
          readOnly
        />
        <p className="w-full text-left font-medium">-- All Data --</p>
        <span className="bg-gray-100 px-1 rounded-md">{items.length}</span>
      </div>

      {items.map((item, idx) => (
        <div
          className="row flex items-center justify-between gap-2 p-4 py-2 hover:bg-gray-50 cursor-pointer"
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
  );
};

export default SelectBox;
