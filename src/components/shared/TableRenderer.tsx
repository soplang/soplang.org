import { cn } from "@site/lib/util";

type TableRendererProps = {
  headers: string[];
  rows: string[][];
  mode?: "dark" | "light";
};

export default function TableRenderer({ headers, rows }: TableRendererProps) {
  return (
    <div
      className={`rounded-lgbg-white   overflow-hidden text-black dark:text-white dark:shadow-md  my-8 w-full `}
    >
      <table className="table-fixed border-collapse w-full  h-full">
        <thead className="w-full">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className={`text-left dark:bg-[#23272e] dark:text-white  dark:border-[#23272e] bg-gray-100 text-gray-900 border-b border-gray-200 font-semibold px-6 py-4 text-base w-1/${headers.length} `}
                style={{ width: `${100 / headers.length}%` }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={cn(
                    "px-6 py-4 border-b border-[#23272e]  dark:border-b dark:border-gray-200  text-gray-800  dark:text-gray-300 text-base ",
                    rIdx % 2 === 0 ? "dark:bg-[#181a20]" : "dark:bg-[#23272e]",
                    rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
