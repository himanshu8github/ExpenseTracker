💸 Expense Tracker App
A clean and interactive expense tracking app built with React, Tailwind CSS, and Context API. Users can manage their finances by adding income or expense transactions, view their current balance, and delete past entries. Built with reusable components and global state management for a seamless experience.

✨ Features
Add income or expense transactions
Real-time balance updates
Separate tracking of income and expenses
Delete transactions from history
Global state using Context API + useReducer
INR currency formatting using Intl.NumberFormat
Responsive and modern UI with Tailwind CSS

🧰 Technologies Used
React.js (with hooks)
JavaScript (ES6+)
Context API + useReducer (state management)

⚛️ React Concepts Used
Concept	Description
useState()	Handles input fields like text and amount
useContext()	Shares transaction data and functions across components
useReducer()	Manages global state actions (add/delete transaction)
Controlled Inputs	Keeps form inputs in sync with component state
Component Composition	Reusable UI components for balance, list, form, etc.

🔄 Transaction Flow
Add Transaction:
Users enter a description and amount (positive for income, negative for expense). On submit, it's added to the list and updates the balance.

Delete Transaction:
Each transaction has a delete button. When clicked, it removes the transaction and updates the balance in real time.

Income & Expense Calculation:
All transactions are filtered and summed separately to show totals for income and expenses.

Money Formatting:
All amounts are formatted to INR using Intl.NumberFormat('en-IN').

🧩 Components Overview
Header.jsx: Displays the app title
Balance.jsx: Shows current balance
IncomeExpenses.jsx: Shows total income and total expense
TransactionList.jsx: Displays list of all transactions
Transaction.jsx: Represents a single transaction item
AddTransaction.jsx: Form to add new transactions
GlobalState.jsx: Wraps app in context provider and manages state
AppReducer.jsx: Handles add/delete logic for the transaction list


🧠 What I Learned
Managing global state with Context and Reducers
Creating reusable components in React
Working with array methods like .map(), .reduce(), .filter()
Structuring a real-world React project cleanly and modularly

👨‍💻 Author
Built by Himanshu Choudhary


1. Create Header.jsx
Displays the app title or heading.

2. Create Balance.jsx
Uses useContext() to access transactions.
Applies .map() to extract all amounts from the transactions.
Uses .reduce() to calculate the total balance.
Includes a currency formatter function for INR values.

3. Create IncomeExpenses.jsx
Shows total income and total expenses.
Uses useContext() to access transaction data.
Uses .map() to get all amounts.
Uses .filter() to split amounts into income and expenses.
Applies .reduce() to calculate totals.
Also defines a currency formatter.

4. Create Transaction.jsx
Represents a single transaction item in the list.
Uses useContext() to access the delete function.
Includes a delete button to remove a transaction.
Applies money formatting for display.

5. Create TransactionList.jsx
Displays the full list (history) of transactions.
Uses useContext() to access transaction array.
Uses .map() to loop through transactions and render them using Transaction.jsx.

6. Create AddTransaction.jsx]
Allows user to add a new transaction.
Uses useState() to manage input states for text and amount.
Uses useContext() to dispatch an add action.
Constructs a new transaction object and dispatches it to the global state.

7. Create GlobalState.jsx
Manages global state using React Context and useReducer().
Defines initialState (array of transactions).
Creates GlobalContext using createContext().
Uses useReducer() to handle actions.
Defines deleteTransaction() and addTransaction() functions.
Provides state and actions via GlobalProvider.

8. Create AppReducer.jsx
Defines the reducer function for global state updates.
Handles actions:
'DELETE_TRANSACTION': removes a transaction by ID.
'ADD_TRANSACTION': adds a new transaction to the list.
Returns the new state based on the action type.