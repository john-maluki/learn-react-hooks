import React, { useEffect, useState } from "react";
import TransactionTable from "./TransactionTable";

const Transactions = ({ transactions }) => {
  return (
    <div>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Transactions;
