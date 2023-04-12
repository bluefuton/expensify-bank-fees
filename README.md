# expensify-bank-fees
Generate a description and amount for Expensify bank fees. This is a tiny tool for Automatticians who submit expenses in USD and receive them in local currency.

## Installation

```
git clone git@github.com:bluefuton/expensify-bank-fees.git
cd expensify-bank-fees
npm install
```

## Usage

```
./bin/index.js
```

You will be prompted for a report title (e.g. "April expenses"), the expensed amount in USD and the amount you actually received in USD. You will have to do the currency conversion yourself for the moment. 🙂

The script will generate a description you can use on your Expensify report, and tell you how much to expense.

<img width="558" alt="Screenshot 2023-04-12 at 12 08 31 PM" src="https://user-images.githubusercontent.com/17325/231314943-55b0c95f-665e-433a-85fa-c58768ea8e6d.png">
