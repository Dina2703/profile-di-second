import React from "react";

function Button({ children }) {
  return (
    <button class="w-40 md:w-52 rounded-lg px-4 py-2 border-2 border-gray-600 dark:border-gray-100 dark:text-gray-100 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 dark:hover:bg-gray-100 dark:hover:text-gray-600 text-xs md:text-sm flex items-center justify-center gap-3">
      {children}
    </button>
  );
}

export default Button;
