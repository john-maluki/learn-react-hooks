import React from "react";

const TransactionTableBody = ({ transactions }) => {
  const transactionList =
    transactions.length === 0 ? (
      <tr>
        <td colSpan="4">No records found!!!</td>
      </tr>
    ) : (
      transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <th scope="row">{transaction.date}</th>
            <td data-title="Description">{transaction.description}</td>
            <td data-title="Category">{transaction.category}</td>
            <td
              data-title="amount"
              data-type="currency"
              className={transaction.amount}
            >
              {transaction.amount}
            </td>
          </tr>
        );
      })
    );
  return <tbody>{transactionList}</tbody>;
};

export default TransactionTableBody;
