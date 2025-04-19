import { ColumnDef } from "@tanstack/react-table";
import { SpaceRepetitionRow } from "@/types/types";

// Fonction pour mettre à jour la prochaine révision selon les répétitions cochées
const updateNextRevision = (lesson: SpaceRepetitionRow) => {
  const repCount = lesson.repetitions.filter(Boolean).length;
  const baseDate = new Date(lesson.lastLearned);

  let delayDays = 1;
  switch (repCount) {
    case 1:
      delayDays = 3;
      break;
    case 2:
      delayDays = 7;
      break;
    case 3:
      delayDays = 14;
      break;
    case 4:
      delayDays = 30;
      break;
    default:
      delayDays = 1;
  }

  baseDate.setDate(baseDate.getDate() + delayDays);
  lesson.nextRevision = baseDate.toISOString().slice(0, 10);
};

export const Columns = ({
  data,
  setData,
}: {
  data: SpaceRepetitionRow[];
  setData: React.Dispatch<React.SetStateAction<SpaceRepetitionRow[]>>;
}): ColumnDef<SpaceRepetitionRow>[] => [
  {
    accessorKey: "subject",
    header: "Sujet",
    cell: ({ row }) => (
      <div className="font-medium">{row.original.subject}</div>
    ),
  },
  {
    accessorKey: "lastLearned",
    header: "Dernière lecture",
    cell: ({ row }) => {
      const lesson = row.original;

      const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        const newData = [...data];
        newData[row.index].lastLearned = newDate;

        updateNextRevision(newData[row.index]);
        setData(newData);
      };

      return (
        <input
          type="date"
          value={lesson.lastLearned}
          onChange={handleDateChange}
          className="border rounded px-2 py-1 text-sm"
        />
      );
    },
  },
  {
    accessorKey: "nextRevision",
    header: "Prochaine révision",
    cell: ({ getValue }) => {
      const date = getValue() as string;
      return date ? new Date(date).toLocaleDateString("fr-FR") : "—";
    },
  },
  {
    header: "1ère rép",
    cell: ({ row }) => {
      const checked = row.original.repetitions[0];
      return (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            const newData = [...data];
            newData[row.index].repetitions[0] = e.target.checked;
            updateNextRevision(newData[row.index]);
            setData(newData);
          }}
        />
      );
    },
  },
  {
    header: "2ème rép",
    cell: ({ row }) => {
      const checked = row.original.repetitions[1];
      return (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            const newData = [...data];
            newData[row.index].repetitions[1] = e.target.checked;
            updateNextRevision(newData[row.index]);
            setData(newData);
          }}
        />
      );
    },
  },
  {
    header: "3ème rép",
    cell: ({ row }) => {
      const checked = row.original.repetitions[2];
      return (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            const newData = [...data];
            newData[row.index].repetitions[2] = e.target.checked;
            updateNextRevision(newData[row.index]);
            setData(newData);
          }}
        />
      );
    },
  },
  {
    header: "4ème rép",
    cell: ({ row }) => {
      const checked = row.original.repetitions[3];
      return (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            const newData = [...data];
            newData[row.index].repetitions[3] = e.target.checked;
            updateNextRevision(newData[row.index]);
            setData(newData);
          }}
        />
      );
    },
  },
];
