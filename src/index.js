import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />;
      <Menu />
      <Footer />;
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza
        name="Pizza Spinaci"
        photoName="pizzas\spinaci.jpg"
        ingredients="tomato, spinach, corn, onion"
        price={10}
        soldOut="false"
      /> */}
      {pizzaLength > 0 ? (
        <>
          <p>We currently have {pizzaLength} pizzas in our menu.</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please comeback later.</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObject }) {
  console.log(pizzaObject);
  // if (pizzaObject.soldOut) {
  //   return null;
  // }

  return (
    <div className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h2>{pizzaObject.name}</h2>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openTime = 12;
  const closedTime = 15;
  const isOpen = hours >= openTime && hours <= closedTime;
  //   if (hours >= opentime && hours <= closedtime) alert("Currently We are open!");
  //   else alert("Sorry We are closed!");
  return (
    <footer className="footer">
      {isOpen ? (
        <div>{new Date().toLocaleTimeString()}. We're currently open!</div>
      ) : (
        <Order openTime={openTime} closedTime={closedTime} />
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We'd love to serve you at {props.openTime}:00 to {props.closedTime}:00,
        visit and order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />;
  </React.StrictMode>
);
