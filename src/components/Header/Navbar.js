import React from "react";

const NavBar = props =>


<header>
<div className="relative bg-red-600">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#!">
          <span class="sr-only">Workflow</span>
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-red rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white-500 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <div class="relative">
          <button type="button" class="text-white-500 group bg-red rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
            <span>Home</span>
          </button>    

        </div>
        <a href="#!" class="text-base font-medium text-white-500 hover:text-gray-900">
          Contact Us
        </a>
        <a href="#!"   class="text-base font-medium text-white-500 hover:text-gray-900">
          Watch Us
        </a>

        <div class="relative">
          <button type="button" class="text-white-500 group bg-red rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
            <span>More</span>
          </button>
        </div>

      </nav>

    </div>
  </div>

</div>

</header>;



export default NavBar;