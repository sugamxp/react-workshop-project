import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { useState } from "react";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  
  return (
    <>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList transactions = {transactions} deleteTransaction = {deleteTransaction}/>
        <AddTransaction transactions={transactions} addTransaction = {addTransaction}/>
      </div>
    </>
  );
}

export default App;
