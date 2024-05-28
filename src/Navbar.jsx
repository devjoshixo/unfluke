import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav class='bg-white border-gray-200 '>
        <div class='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <img
            src='/cropped_unfluke_full.148e5bfc.png'
            class='h-8'
            alt='Flowbite Logo'
          />

          <div class='flex items-center space-x-6 rtl:space-x-reverse'>
            <a
              href='tel:5541251234'
              class='text-sm  text-gray-500 dark:text-white hover:underline'
            >
              (555) 412-1234
            </a>
            <a
              href='#'
              class='text-sm  text-blue-600 dark:text-blue-500 hover:underline'
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav class='bg-gray-50 dark:bg-gray-700'>
        <div class='max-w-screen-xl px-4 py-3 mx-auto'>
          <div class='flex items-center'>
            <ul class='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                  aria-current='page'
                >
                  LeaderBoard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Historical Trading
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Historical Chart
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Scanners
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Alerts
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Basic Backtest
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Advanced Backtest
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                >
                  My Earnings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
