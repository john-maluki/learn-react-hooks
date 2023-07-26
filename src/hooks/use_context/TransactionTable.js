import React from "react";
import TransactionTableBody from "./TransactionTableBody";

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <table>
        <caption>Displays a list of your recent bank transactions</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">
              <div className="trans-sort">
                Category <i className="fa fa-sort" aria-hidden="true"></i>
              </div>
            </th>
            <th scope="col">
              <div className="trans-sort">
                Amount (KSH) <i className="fa fa-sort" aria-hidden="true"></i>
              </div>
            </th>
          </tr>
        </thead>
        <TransactionTableBody transactions={transactions} />
      </table>
    </div>
  );
};

export default TransactionTable;
