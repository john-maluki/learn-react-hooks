import { useEffect, useState } from "react";
import Transactions from "./hooks/use_context/Transactions";
import { TransactionsContext } from "./hooks/use_context/TransactionsContext";
import Box from "./hooks/use_refs/Box";
import Counter from "./hooks/use_refs/Counter";
import LoginForm from "./hooks/use_refs/LoginForm";
import Ticker from "./hooks/use_refs/Ticker";
import Counter10 from "./hooks/reduce_context/Counter10";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/transactions`)
      .then((resp) => resp.json())
      .then((trans) => {
        setTransactions(trans);
      });
  }, []);

  return (
    <div>
      {/* <Counter /> */}
      {/* <Ticker /> */}
      {/* <Box /> */}
      {/* <LoginForm /> */}

      {/* <Transactions transactions={transactions} /> */}
      <Counter10 />
    </div>
  );
}

export default App;
