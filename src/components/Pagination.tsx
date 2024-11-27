type Props = {
  pageCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
export default function Pagination({
  pageCount,
  currentPage,
  setCurrentPage,
}: Props) {
  return (
    <>
      <div className="flex justify-end">
        <nav className="relative z-0 inline-flex flex-wrap -space-x-px rounded-md shadow-md">
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md p-2 text-sm text-gray-500 hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage);
            }}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {[...Array(pageCount)].map((_, i) => (
            <a
              href=""
              className={
                i == currentPage
                  ? "relative inline-flex items-center text-sm text-gray-500 p-2 md:px-3 md:py-2 hover:bg-gray-200 border-2 border-indigo-300"
                  : "relative inline-flex items-center text-sm text-gray-500 p-2 md:px-3 md:py-2 hover:bg-gray-200 "
              }
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(i);
              }}
              key={"pagination" + i}
            >
              {i + 1}
            </a>
          ))}

          <a
            href=""
            className="relative inline-flex items-center rounded-r-md p-2 text-sm text-gray-500 hover:bg-gray-200 "
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(
                currentPage < pageCount ? currentPage + 1 : currentPage
              );
            }}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </>
  );
}
