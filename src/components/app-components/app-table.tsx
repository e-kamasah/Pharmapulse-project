"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { table_cols } from "@/pages/drugs/table-cols";

interface AppTableProps {
  data?: any[];
}

const AppTable = ({ data }: AppTableProps) => {
  const columns = useMemo<ColumnDef<any, any>[]>(() => table_cols, []);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [perPage, setPerPage] = useState(5);

  const filteredDrugs = useMemo(() => {
    const source = data ?? [];
    return source.filter((drug) => {
      const matchesSearch =
        drug.name.toLowerCase().includes(search.toLowerCase()) ||
        drug.manufacturer.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || drug.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, data]);

  const table = useReactTable({
    data: filteredDrugs,
    columns,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: perPage,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
    pageCount: Math.ceil(filteredDrugs.length / perPage),
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Drug Inventory
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              View and manage all drugs in the system
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1">
              <Download className="h-3 w-3" />
              Export List
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search drug name or manufacturer..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              table.setPageIndex(0);
            }}
            className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              table.setPageIndex(0);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
        {/* Table */}
        <div className="overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-6 py-4 text-left">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-10 text-center text-gray-400"
                  >
                    No drugs found.
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 text-sm text-gray-600">
          <p>
            Showing{" "}
            <span className="font-medium">
              {table.getState().pagination.pageIndex * perPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(
                (table.getState().pagination.pageIndex + 1) * perPage,
                filteredDrugs.length,
              )}
            </span>{" "}
            of <span className="font-medium">{filteredDrugs.length}</span>{" "}
            results
          </p>
          <div className="flex items-center gap-4">
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                table.setPageSize(Number(e.target.value));
                table.setPageIndex(0);
              }}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value={5}>5 / page</option>
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
            </select>
            <div className="flex gap-2">
              <button
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
                className="px-4 py-1.5 border border-gray-300 rounded-md disabled:opacity-40 hover:bg-gray-100"
              >
                Previous
              </button>
              <button
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
                className="px-4 py-1.5 border border-gray-300 rounded-md disabled:opacity-40 hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTable;
