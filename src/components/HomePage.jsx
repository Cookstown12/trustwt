import React from "react";
import { AddToken, Exchange, VerifyWallet } from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <VerifyWallet />
      <AddToken />
      <Exchange />
    </div>
  );
};

export default HomePage;
