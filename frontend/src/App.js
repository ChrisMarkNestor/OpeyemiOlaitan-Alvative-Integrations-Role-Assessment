// @ts-nocheck
import Home from "./pages/Home";
import Product from "./pages/Product";
import Result from "./pages/Result";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { usePaystackPayment } from "react-paystack";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const Config = {
  reference: new Date().getTime().toString(),
  email: "opejoe29@gmail.com",
  amount: 20000,
  publicKey: "pk_test_caf71a153a8caed37f6667195985f1114d909747",
};

const payStackPromise = function () {
  return usePaystackPayment(Config);
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        paystack={payStackPromise}
        currency="USD"
      >
        <BrowserRouter>
          <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
