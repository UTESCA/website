import type { NextPage } from "next";
import Link from "next/link";
const Footer: NextPage = () => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 University of Toronto Engineering Student Consulting
            Association —
            <a
              href="https://www.linkedin.com/in/xiao215/"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Xiao215
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Engineering for community impact, career growth, and the future
          </span>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <Link href="https://www.facebook.com/uoftesca/" target="_blank">
              <button className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </button>
            </Link>
            <Link href="https://www.instagram.com/utesca/" target="_blank">
              <button className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/company/utescaconsulting/?originalSubdomain=ca"
              target="_blank"
            >
              <button className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </button>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
