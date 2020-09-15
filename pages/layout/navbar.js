import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({href }) {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const clickNavBar = () => {
    return (
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path
          v-if="isOpen"
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
        <path
          v-if="!isOpen"
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    );
  };
  return (
    <header class=" sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img onClick={() => router.push("/")}
            class="h-8"
            src="https://firebasestorage.googleapis.com/v0/b/quedichhoamai.appspot.com/o/thuancan.png?alt=media&token=7ee471fd-7132-4007-ba46-acfa805ed548"
            alt="Que Dich Hoa Mai"
          />
        </div>
        <div class="pl-2">
          <button
            onClick={() => router.push('/64quedich/')}
            type="button"
            class="block px-2 py-1 text-gray-500 rounded hover:bg-orange-300 focus:text-white focus:outline-none"
          >
            64 Quẻ Dịch
          </button>
        </div>
      </div>

      <nav class="px-2 pt-2 pb-4 sm:flex sm:p-0">
   
        <a
                    onClick={() => router.push('/layquedich/')}

          href="#"
          class="block px-2 py-1 font-semibold rounded hover:bg-orange-300"
        >
          Lấy Quẻ Dịch 
        </a>
        <a
          href="#"
          class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-orange-300 sm:mt-0 sm:ml-2"
        >
          Dịch Vụ
        </a>
        <a
          href="#"
          class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-orange-300 sm:mt-0 sm:ml-2"
        >
          Liên Hệ
        </a>
      </nav>
    </header>
  );
}
