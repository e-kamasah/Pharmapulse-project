import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUrlBoolean } from "@/hooks/use-url-state";
import { PlusIcon } from "lucide-react";

const NewBranchModal = () => {
  // default must be false — clearShowModal() resets to the default value
  const [showModal, setShowModal, clearShowModal] = useUrlBoolean(
    "show-modal",
    false,
  );

  const resetDialog = () => {
    // reset any form state here
  };

  const handleClose = () => {
    resetDialog();
    clearShowModal(); // removes ?show-modal=... from URL → modal closes
  };

  return (
    <Dialog
      open={showModal}
      onOpenChange={(open) => {
        if (!open) handleClose(); // handles backdrop click + escape key
      }}
    >
      <DialogTrigger asChild>
        <button
          onClick={() => setShowModal(true)} // sets ?show-modal=true in URL
          className="bg-primary text-white px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-primary/90 transition"
        >
          <PlusIcon className="h-5 w-5" />
          New Branch
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <form>
          <div className="my-3">
            <h2 className="text-lg font-semibold">Create New Branch</h2>
            <p className="text-sm text-gray-500">
              This is to create a new branch under your pharmacy.
            </p>
          </div>
          <div>
            <input className="p-2.5 w-full rounded-lg border border-gray-300" />
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBranchModal;
