type StatusType = "not-started" | "in-progress" | "done";

const statusMap: Record<
  StatusType,
  { label: string; color: string; bg: string }
> = {
  "not-started": {
    label: "Pas commencé",
    color: "bg-red-500",
    bg: "bg-red-100",
  },
  "in-progress": {
    label: "En cours",
    color: "bg-yellow-500",
    bg: "bg-yellow-100",
  },
  done: {
    label: "Terminé",
    color: "bg-green-500",
    bg: "bg-green-100",
  },
};

export const StatusBadge = ({ status }: { status: StatusType }) => {
  const { label, color, bg } = statusMap[status];

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bg} text-gray-800 w-max`}
    >
      <span className={`h-2 w-2 rounded-full mr-2 ${color}`} />
      {label}
    </div>
  );
};
