const StatusBullet = ({ status }: { status: string }) => {
  const statusColors: { [key: string]: string[] } = {
    "Sold": ["bg-green-500","bg-green-50 border-green-400"],
    "Not Sold": ["bg-red-400","bg-red-50 border-red-400"],
    "Removed": ["bg-yellow-500","bg-yellow-50 border-yellow-400"],
    "Sold By Nego": ["bg-blue-500","bg-blue-50 border-blue-400"],
    "Cancelled": ["bg-gray-500","bg-gray-50 border-gray-400"],
  };

  return (
    <div className={`flex items-center gap-2 px-2 py-2 rounded-full border ${statusColors[status][1]}`}>
      <div className={`w-3 h-3 rounded-full ${statusColors[status][0]}`}></div>
      <p className="text-sm font-medium text-gray-900">{status}</p>
    </div>
  );
};

export default StatusBullet;
     