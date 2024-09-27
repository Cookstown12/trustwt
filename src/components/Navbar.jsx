import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white flex justify-between items-center p-4 mb-8 font-bold md:text-2xl">
        <div className="text-xl font-bold">Trust Wallet</div>
        <div className="space-x-4">
          <a href="#wallet" className="hover:text-blue-300">
            Wallet
          </a>
          <a href="#exchange" className="hover:text-blue-300">
            Exchange
          </a>
          <a href="#settings" className="hover:text-blue-300">
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export const Hero = () => {
  return (
    <div>
      <section className="flex flex-col items-center text-center p-8 bg-gradient-to-r from-purple-500 to-indigo-500">
        <h1 className="text-4xl font-bold text-white">
          Manage Your Crypto Easily
        </h1>
        <p className="text-white mt-4">
          A secure, beautiful wallet for all your digital assets.
        </p>
        <Link
          to="/verify-wallet"
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-6 font-bold text-2xl"
        >
          Verify wallet
        </Link>
      </section>
    </div>
  );
};

export const Features = () => {
  return (
    <div>
      <section id="features" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Manage Assets</h3>
            <p>Track and swap your assets effortlessly across networks.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Secure Wallet</h3>
            <p>Your crypto is safe with built-in security features.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Mobile Access</h3>
            <p>Manage crypto on the go with mobile apps.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const WalletDashboard = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold">Your Wallet</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Ethereum (ETH)</h3>
        <p className="text-xl">$1,200</p>
        <p className="text-sm text-gray-500">0.75 ETH</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Bitcoin (BTC)</h3>
        <p className="text-xl">$10,000</p>
        <p className="text-sm text-gray-500">0.5 BTC</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Binance Coin (BNB)</h3>
        <p className="text-xl">$2,500</p>
        <p className="text-sm text-gray-500">5 BNB</p>
      </div>
    </div>
  </section>
);

export const Exchange = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold">Exchange</h2>
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <div className="flex justify-between mb-4">
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded-lg w-1/2 mr-4"
        />
        <select className="border p-2 rounded-lg w-1/2">
          <option>Ethereum (ETH)</option>
          <option>Bitcoin (BTC)</option>
          <option>Binance Coin (BNB)</option>
        </select>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
        Swap Now
      </button>
    </div>
  </section>
);

export const Portfolio = () => (
  <section className="p-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Bitcoin (BTC)</h3>
        <p className="text-xl font-bold">$10,200</p>
        <p className="text-sm text-gray-500">1.5 BTC</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Ethereum (ETH)</h3>
        <p className="text-xl font-bold">$5,000</p>
        <p className="text-sm text-gray-500">3 ETH</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Litecoin (LTC)</h3>
        <p className="text-xl font-bold">$600</p>
        <p className="text-sm text-gray-500">10 LTC</p>
      </div>
    </div>
  </section>
);

export const AddToken = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold">Manage Tokens</h2>
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Token Name"
          className="border rounded-lg p-2 w-full mr-4"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add Token
        </button>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 mt-8">
    <div className="text-center">
      <p>&copy; 2024 Trust Wallet</p>
    </div>
  </footer>
);

export const VerifyWallet = () => (
  <section className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h2 className="text-3xl font-bold mb-4">Secure Your Wallet</h2>
    <p className="text-lg mb-6">
      Take control of your assets and ensure your wallet is secure. Verifying
      your wallet gives you full access to all features and keeps your crypto
      safe.
    </p>
    <Link
      to="/verify-wallet"
      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
    >
      Verify Now
    </Link>
  </section>
);
