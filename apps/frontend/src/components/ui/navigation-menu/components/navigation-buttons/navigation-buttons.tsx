import { Icons } from "@/lib/shared/icons";
import React from "react";

export default function NavigationButtons() {
  return (
    <div className="flex items-center space-x-2">
      <button className="group p-2 relative rounded-full active:scale-95 transition-transform duration-150">
        <span className="sr-only">Search</span>
        <div className="absolute inset-0 rounded-full transition-colors group-hover:bg-gray-100" />
        <Icons.search className="h-5 w-5 stroke-[1.5] transition-colors relative group-hover:text-gray-600" />
      </button>
      <button className="group p-2 relative rounded-full active:scale-95 transition-transform duration-150">
        <span className="sr-only">Cart</span>
        <div className="absolute inset-0 rounded-full transition-colors group-hover:bg-gray-100" />
        <Icons.cart className="h-5 w-5 stroke-[1.5] transition-colors relative group-hover:text-gray-600" />
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  );
}
