const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3">
        {/* ===== 1️⃣ Contact Section ===== */}
        <div>
          <p>
            <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Call us
            </span>
            <a
              href="#"
              className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
            >
              0123456789
            </a>
          </p>

          <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            <li>Monday to Friday: 10am - 5pm</li>
            <li>Weekend: 10am - 3pm</li>
          </ul>

          
          
        </div>

        {/* ===== 2️⃣ Services Section ===== */}
        <div>
          <p className="font-medium text-gray-900 dark:text-white mb-6">
            Services
          </p>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                1on1 Coaching
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Company Review
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Accounts Review
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                HR Consulting
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                SEO Optimisation
              </a>
            </li>
          </ul>
        </div>

        {/* ===== 3️⃣ Company Section ===== */}
        <div>
          <p className="font-medium text-gray-900 dark:text-white mb-6">
            Company
          </p>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Meet the Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Cookies
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2025. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
