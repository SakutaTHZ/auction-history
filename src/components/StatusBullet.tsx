const StatusBullet = ({ status }: { status: string }) => {
  const statusColors: { [key: string]: string } = {
    "Sold": "bg-green-500",
    "Not Sold": "bg-red-500",
    "Removed": "bg-yellow-500",
    "Sold By Nego": "bg-blue-500",
    "Cancelled": "bg-gray-500",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${statusColors[status]}`}></div>
      <p className="text-sm font-medium">{status}</p>
    </div>
  );
};

export default StatusBullet;
