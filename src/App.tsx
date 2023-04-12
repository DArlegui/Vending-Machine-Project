import React, { useState } from "react";
import logo from "./logo.svg";
import { Button, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [drinks, setDrinks] = useState([
    { name: "Coke", price: 120, quantity: 10 },
    { name: "Soda", price: 160, quantity: 10 },
    { name: "Juice", price: 200, quantity: 10 },
  ] as Drinks[]);
  const [cash, setCash] = useState(500);

  function getProduct(name: string) {
    const product = drinks.findIndex((drink) => drink.name === name);
    if (drinks[product].price <= cash) {
      drinks[product].quantity -= 1;
      setCash(cash - drinks[product].price);
      setDrinks([...drinks]);
    } else {
      alert("Not enough money!");
    }
  }

  return (
    <div className="App">
      <Typography>Vending Machine</Typography>
      <Typography>Cash: {cash}</Typography>
      {drinks.map((drink) => {
        return (
          <Button variant="contained" onClick={() => getProduct(drink.name)}>
            {drink.name} {drink.price} ({drink.quantity})
          </Button>
        );
      })}
    </div>
  );
}

type Drinks = {
  name: string;
  price: number;
  quantity: number;
};

export default App;
