import React from "react";

const Table = ({ headers, body }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{...body}</tbody>
    </table>
  );
};

export default Table;