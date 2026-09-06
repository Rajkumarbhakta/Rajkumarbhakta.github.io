"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  id: string;
  label: string;
  supporting?: string;
  className?: string;
}

/**
 * M3 outlined text field. The label rests inside the field and floats up into a
 * notch in the border on focus or once there is a value — which is why the
 * border is drawn by a fieldset/legend pair rather than a plain border: the
 * legend reserves exactly as much width as the floated label needs.
 */
function Field({
  id,
  label,
  supporting,
  className,
  children,
  multiline,
}: BaseProps & { children: React.ReactNode; multiline?: boolean }) {
  return (
    <div className={cn("group relative", className)}>
      <div className="relative">
        {children}
        <fieldset
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-field border border-outline px-2",
            multiline ? "top-0" : "-top-1.5",
            "transition-[border-color,border-width] duration-[120ms] ease-standard",
            "group-focus-within:border-2 group-focus-within:border-primary",
          )}
        >
          <legend
            className={cn(
              "ml-1 h-0 max-w-0 overflow-hidden whitespace-nowrap px-0 text-label-md opacity-0",
              "transition-all duration-[200ms] ease-emphasized",
              "group-focus-within:max-w-full group-focus-within:px-1",
              "peer-[:not(:placeholder-shown)]:max-w-full",
            )}
          >
            {label}
          </legend>
        </fieldset>

        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-3 text-body-lg text-on-surface-variant",
            "origin-left transition-all duration-[200ms] ease-emphasized",
            multiline ? "top-4" : "top-1/2 -translate-y-1/2",
            // Float the label whenever the field is focused or filled. The
            // placeholder is a single space so :placeholder-shown tracks "empty".
            "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-primary",
            "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:scale-75",
            multiline &&
              "peer-focus:top-0 peer-[:not(:placeholder-shown)]:top-0",
          )}
        >
          {label}
        </label>
      </div>

      {supporting && (
        <p className="mt-1 px-4 text-label-md text-on-surface-variant">{supporting}</p>
      )}
    </div>
  );
}

const inputClasses =
  "peer w-full rounded-field bg-transparent px-4 text-body-lg text-on-surface outline-none placeholder:text-transparent";

export function TextField({
  id,
  label,
  supporting,
  className,
  ...props
}: BaseProps & Omit<React.ComponentPropsWithoutRef<"input">, "id" | "placeholder" | "className">) {
  return (
    <Field id={id} label={label} supporting={supporting} className={className}>
      {/* 56dp tall, 16dp radius, per the component spec. */}
      <input id={id} placeholder=" " className={cn(inputClasses, "h-14")} {...props} />
    </Field>
  );
}

export function TextArea({
  id,
  label,
  supporting,
  className,
  rows = 5,
  ...props
}: BaseProps &
  Omit<React.ComponentPropsWithoutRef<"textarea">, "id" | "placeholder" | "className">) {
  return (
    <Field id={id} label={label} supporting={supporting} className={className} multiline>
      <textarea
        id={id}
        rows={rows}
        placeholder=" "
        className={cn(inputClasses, "resize-y py-4")}
        {...props}
      />
    </Field>
  );
}
