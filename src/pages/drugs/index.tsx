import SiteHeader from "@/components/site-header";
import ElegantTable from "@/components/table";
import { NewProductDialog } from "./modal";

const DrugsPage = () => {
  return (
    <div>
      <div className="sticky top-0 left-0 z-10 border-b bg-background">
        <SiteHeader title="Drugs / Medicine" />
      </div>

      <div className="p-4">
        <div className="mt-3 flex items-center justify-end gap-2">
          <NewProductDialog />
        </div>
        <div className="mt-5">
          <ElegantTable />
        </div>
      </div>
    </div>
  );
};

export default DrugsPage;
