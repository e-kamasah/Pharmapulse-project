"use client";
import { useState, useMemo } from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];

export default function ElegantTable() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.email.toLowerCase().includes(search.toLowerCase()) ||
        person.title.toLowerCase().includes(search.toLowerCase()) ||
        person.role.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === "All" || person.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [search, roleFilter]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Team Members
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name, title, email, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option>All</option>
          <option>Owner</option>
          <option>Admin</option>
          <option>Member</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Role
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredPeople.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-400">
                  No results found.
                </td>
              </tr>
            ) : (
              filteredPeople.map((person) => (
                <tr
                  key={person.email}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {person.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {person.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {person.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {person.role}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 transition"
                    >
                      Edit<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
