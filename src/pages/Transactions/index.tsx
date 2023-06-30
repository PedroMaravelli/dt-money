import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import { Summary } from "../../components/Sumarry";
import { SearchForm } from "./components/SeachForm";
import { TransactionsContainer, TransactionsTable,  PriceHighlight } from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";


  
export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                <tbody>
                {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
                </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>

    )
}