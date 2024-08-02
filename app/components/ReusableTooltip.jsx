"use client";

import {  Tooltip } from "flowbite-react";

export function ReusableTooltip({children}) {
  return (
    <Tooltip  content="Tooltip content " className="rounded-full">
        {children}
    </Tooltip>
  );
}
