import React from "react";

export default function Nav() {
  return (
    <div className="w-full">
      <nav className="bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-semibold">MOVIE APP</h1>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
