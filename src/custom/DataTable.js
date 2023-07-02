import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Decision</th>
          <th>Final nominal Cash Outflow Per Year</th>
          <th>Final Real/Discounted Cash Outflow Per Year</th>
          <th>Final Returns Per Year</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.decision}</td>
            <td>{row['Final nominal Cash Outflow Per Year']}</td>
            <td>{row['Final Real/Discounted Cash Outflow Per Year']}</td>
            <td>{row['Final Returns Per Year']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
