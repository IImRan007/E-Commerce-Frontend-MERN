import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="py-10 h-[100vh] flex justify-center items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link to="/">
          <div className="mt-4 flex items-center justify-center gap-x-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <FaArrowRight size={16} className="mr-2" />
              Go back
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
