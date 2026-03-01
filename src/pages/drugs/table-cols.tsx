import type { ReactNode } from "react";

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  "Low Stock": "bg-yellow-100 text-yellow-700",
  "Out of Stock": "bg-red-100 text-red-700",
};

interface Drug {
  name: string;
  manufacturer: string;
  stock: number;
  price: number;
  status: string;
  ww: any;
}

interface TableCol {
  accessorKey: keyof Drug;
  header: string;
  cell: (info: { getValue: () => any }) => ReactNode;
}

export const table_cols: TableCol[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <span className="font-medium text-gray-900">{info.getValue()}</span>
    ),
  },
  {
    accessorKey: "manufacturer",
    header: "Manufacturer",
    cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
  },
  {
    accessorKey: "price",
    header: "Price (GH₵)",
    cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[info.getValue() as string]}`}
      >
        {info.getValue()}
      </span>
    ),
  },
  {
    accessorKey: "ww",
    header: "Actions",
    cell: (info) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[info.getValue() as string]}`}
      >
        {info.getValue()}
      </span>
    ),
  },
];
