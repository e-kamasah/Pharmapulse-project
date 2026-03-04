import clsx from "clsx";

type SkeletonVariant = "rect" | "circle";

interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: SkeletonVariant;
  className?: string;
}

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  variant = "rect",
  className,
}: SkeletonProps) => {
  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-200",
        width,
        height,
        variant === "circle" ? "rounded-full" : "rounded-md",
        className,
      )}
    />
  );
};

export default Skeleton;
