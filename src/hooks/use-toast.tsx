import { toast } from "sonner";
import { Check, Info, OctagonX } from "lucide-react";

type ToastOptions = {
  description?: string;
  icon?: React.ReactNode;
};

const useToast = () => {
  const show = (message: string, options?: ToastOptions) => {
    toast(message, options);
  };

  const errorToast = (message: string, options?: ToastOptions) => {
    toast.error(message, {
      icon: options?.icon ?? <OctagonX className="text-red-600" />,
      description: options?.description,
    });
  };

  const successToast = (message: string, options?: ToastOptions) => {
    toast.success(message, {
      icon: options?.icon ?? <Check className="text-green-600" />,
      description: options?.description,
    });
  };

  const infoToast = (message: string, options?: ToastOptions) => {
    toast.info(message, {
      icon: options?.icon ?? <Info className="text-blue-600" />,
      description: options?.description,
    });
  };

  return { show, error: errorToast, success: successToast, info: infoToast };
};

export default useToast;
