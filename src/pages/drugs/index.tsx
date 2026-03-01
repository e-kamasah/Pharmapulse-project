import SiteHeader from "@/components/site-header";
import NewProductButton from "./modal";
import { Package } from "lucide-react";
import AppTable from "@/components/app-components/app-table";
import useGetDrugs from "@/hooks/use-get-drugs";

const DrugsPage = () => {
  const { drugs } = useGetDrugs();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <SiteHeader title="Drugs / Medicine" />
      </div>

      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="mb-3">
          <div className="via-white to-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                    Drugs Management
                  </h1>
                </div>
                <p className="text-gray-500 max-w-2xl text-sm">
                  Efficiently manage your pharmaceutical inventory. Review, add,
                  and update drug information with ease.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500">
                      Active Drugs: 156
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs text-gray-500">Low Stock: 12</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Package className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-xs text-gray-500">Categories: 8</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <NewProductButton />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <AppTable data={drugs ?? []} />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrugsPage;
