import React from "react";

const TableHeader = ({ headers =[] }) => {
  return (
    <tr className="text-left border-y-[1px] border-zinc-300 text-opacity-50">
      {headers.map((header) => (
        <th
          key={header}
          className="border-y-[1px] border-zinc-300 p-3 text-zinc-500 bg-white sticky top-0 z-10"
        >
          {header}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
 