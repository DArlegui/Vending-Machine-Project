import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { type } from "os";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { border, Stack } from "@mui/system";

//JavaScript
function App() {
  //Housekeeping
  const [drinks, setDrinks] = useState([
    { name: "Coke", price: 120, quantity: Math.floor(Math.random() * 20) },
    { name: "Pepsi", price: 120, quantity: Math.floor(Math.random() * 20) },
    { name: "Juice", price: 100, quantity: Math.floor(Math.random() * 20) },
    { name: "Coffee", price: 200, quantity: Math.floor(Math.random() * 20) },
  ] as Drinks[]);

  const [cash, setCash] = useState(Math.floor(Math.random() * 1000));

  //Functions
  const getProduct = (name: string) => {
    const product = drinks.findIndex((drink) => drink.name === name);
    if (drinks[product].quantity <= 0) {
      alert("Out of stock!");
    } else if (cash <= 0 || cash < drinks[product].price) {
      alert("No Money no Honey!");
    } else {
      drinks[product].quantity -= 1;
      setCash(cash - drinks[product].price);
      setDrinks([...drinks]); //Receate/Update the Array
    }
  };

  //HTML
  return (
    <div className="App">
      <Typography variant="h4" mb={3}>
        Vending Machine
      </Typography>
      <Typography variant="h5" mb={3}>
        Cash: ¥{cash}
      </Typography>
      <button
        onClick={() => setCash(cash + 1000)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
      >
        <Typography variant="h5" mb={3}>
          Get Rich
        </Typography>
      </button>
      <Stack spacing={4} direction="row" justifyContent={"center"}>
        {drinks.map((drink) => {
          return (
            <Button
              variant="outlined"
              sx={{
                background: "#e2faff",
                borderWidth: 2,
                borderRadius: 2,
                color: "black",
                textTransform: "none",
              }}
              onClick={() => getProduct(drink.name)}
            >
              {drink.name} {drink.price} ({drink.quantity})
            </Button>
          );
        })}
      </Stack>
    </div>
  );
}

//TypeScript
type Drinks = {
  name: string;
  price: number;
  quantity: number;
};

export default App;
