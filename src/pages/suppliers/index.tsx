import SiteHeader from "@/components/site-header";
import CustomTable from "@/components/app-components/app-table";

const SuppliersPage = () => {
  return (
    <div>
      <div className="sticky top-0 left-0 z-10 border-b bg-background">
        <SiteHeader title="Suppliers" />
      </div>

      <div className="p-4">
        <CustomTable />
      </div>
    </div>
  );
};

export default SuppliersPage;
