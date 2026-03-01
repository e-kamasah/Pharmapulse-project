import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  PlusIcon,
  ArrowLeft,
  Barcode,
  FileText,
  Camera,
  Upload,
  RefreshCw,
} from "lucide-react";

type Step = "select" | "barcode" | "manual" | "ai";

interface AiExtractedData {
  name?: string;
  strength?: string;
  dosageForm?: string;
  manufacturer?: string;
  packSize?: string;
}

const NewProductButton = () => {
  const [step, setStep] = useState<Step>("select");
  const [loading, setLoading] = useState(false);

  // Manual form state
  const [form, setForm] = useState({
    name: "",
    strength: "",
    dosageForm: "",
    manufacturer: "",
    sellingPrice: "",
    stock: "",
    batchNumber: "",
    expiryDate: "",
  });

  // AI state
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const barcodeRef = useRef<HTMLInputElement>(null);

  const resetDialog = () => {
    setStep("select");
    setImagePreview(null);
    stopCamera();
  };

  // ================= CAMERA =================
  const openCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });

    if (videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }

    setStream(mediaStream);
    setIsCameraOpen(true);
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    context?.drawImage(videoRef.current, 0, 0);
    const imageData = canvas.toDataURL("image/jpeg", 0.8);

    setImagePreview(imageData);
    stopCamera();
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setIsCameraOpen(false);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  // ================= FILE UPLOAD =================
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // ================= AI PROCESS =================
  const processWithAI = async () => {
    if (!imagePreview) return;

    try {
      setLoading(true);

      const res = await axios.post("/api/products/ai-read", {
        image: imagePreview,
      });

      const aiData: AiExtractedData = res.data;

      // Prefill manual form
      setForm((prev) => ({
        ...prev,
        name: aiData.name || "",
        strength: aiData.strength || "",
        dosageForm: aiData.dosageForm || "",
        manufacturer: aiData.manufacturer || "",
      }));

      setStep("manual");
      setImagePreview(null);
    } catch (error) {
      alert("AI failed to extract product details.");
    } finally {
      setLoading(false);
    }
  };

  // ================= SAVE PRODUCT =================
  const saveProduct = async () => {
    try {
      setLoading(true);

      await axios.post("/api/products", form);

      alert("Product saved successfully");
      resetDialog();
    } catch (error) {
      alert("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={(open) => !open && resetDialog()}>
      <DialogTrigger asChild>
        <button className="bg-primary text-white px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-primary/90 transition">
          <PlusIcon className="h-5 w-5" />
          New Product
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        {step !== "select" && (
          <button
            onClick={() => setStep("select")}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-2 hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        )}

        {/* ================= SELECT ================= */}
        {step === "select" && (
          <>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Choose how you want to create the product.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 mt-4">
              <button
                onClick={() => {
                  setStep("barcode");
                  setTimeout(() => barcodeRef.current?.focus(), 100);
                }}
                className="border-2 border-primary bg-primary/5 rounded-xl p-4 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <Barcode className="text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Scan Barcode</p>
                    <p className="text-sm text-muted-foreground">
                      Fastest option
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setStep("manual")}
                className="border rounded-xl p-4 hover:border-primary hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <FileText className="text-primary" />
                  <p className="font-semibold">Manual Entry</p>
                </div>
              </button>

              <button
                onClick={() => setStep("ai")}
                className="border rounded-xl p-4 hover:border-primary hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <Camera className="text-primary" />
                  <p className="font-semibold">AI Assistant</p>
                </div>
              </button>
            </div>
          </>
        )}

        {/* ================= BARCODE ================= */}
        {step === "barcode" && (
          <>
            <DialogHeader>
              <DialogTitle>Scan Barcode</DialogTitle>
            </DialogHeader>

            <input
              ref={barcodeRef}
              placeholder="Scan barcode..."
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary mt-4"
            />

            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </>
        )}

        {/* ================= MANUAL ================= */}
        {step === "manual" && (
          <>
            <DialogHeader>
              <DialogTitle>Manual Product Entry</DialogTitle>
            </DialogHeader>

            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 mt-4">
              {Object.entries(form).map(([key, value]) => (
                <input
                  key={key}
                  type={
                    key.includes("Price") || key === "stock"
                      ? "number"
                      : key === "expiryDate"
                        ? "date"
                        : "text"
                  }
                  placeholder={key}
                  value={value}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      [key]: e.target.value,
                    }))
                  }
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
                />
              ))}
            </div>

            <DialogFooter className="mt-6">
              <Button
                onClick={saveProduct}
                className="bg-primary hover:bg-primary/90 w-full"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Product"}
              </Button>
            </DialogFooter>
          </>
        )}

        {/* ================= AI ================= */}
        {step === "ai" && (
          <>
            <DialogHeader>
              <DialogTitle>AI Assistant</DialogTitle>
              <DialogDescription>
                Capture or upload a drug box photo.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {!imagePreview && !isCameraOpen && (
                <>
                  <Button
                    onClick={openCamera}
                    className="w-full bg-primary hover:bg-primary/90 flex gap-2"
                  >
                    <Camera size={18} />
                    Open Camera
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex gap-2"
                  >
                    <Upload size={18} />
                    Upload Image
                  </Button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileUpload}
                  />
                </>
              )}

              {isCameraOpen && (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    className="w-full rounded-lg border"
                  />
                  <Button onClick={capturePhoto} className="w-full bg-primary">
                    Capture
                  </Button>
                </>
              )}

              {imagePreview && (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full rounded-lg border"
                  />

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setImagePreview(null)}
                      className="flex-1 flex gap-2"
                    >
                      <RefreshCw size={16} />
                      Retake
                    </Button>

                    <Button
                      onClick={processWithAI}
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Process with AI"}
                    </Button>
                  </div>
                </>
              )}

              <canvas ref={canvasRef} className="hidden" />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewProductButton;
