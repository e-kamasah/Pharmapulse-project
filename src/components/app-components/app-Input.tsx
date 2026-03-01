import React, { forwardRef, useId } from "react";
import clsx from "clsx";
import { FieldLabel } from "../ui/field";

type CustomInputProps = {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      error,
      helperText,
      id,
      className,
      containerClassName,
      required,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const describedById = error
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;

    return (
      <div className={clsx("flex flex-col gap-1", containerClassName)}>
        {label && (
          <FieldLabel htmlFor={inputId} className="text-sm font-medium">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FieldLabel>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedById}
          required={required}
          {...props}
          className={clsx(
            "w-full rounded-md border border-border bg-background px-3 py-2 text-sm transition-all",
            "focus:outline-none focus:ring-2 focus:ring-primary/200 focus:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error &&
              "border-destructive focus:border-destructive focus:ring-destructive",
            className,
          )}
        />

        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-500">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
