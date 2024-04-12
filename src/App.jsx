import axios from "axios";
import React, { useState } from "react";
import ip from "../../ip.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <label htmlFor="username" className="text-gray-600">
          Nom d'utilisateur :
        </label>
        <input
          type="text"
          name="username"
          value={username}
          className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          autoComplete="off"
          placeholder="Nom d'utilisateur"
        />
        <label htmlFor="password" className="text-gray-600">
          Mot de passe :
        </label>
        <input
          type="password"
          name="password"
          value={password}
          className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          autoComplete="off"
          placeholder="Mot de passe"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-[#00416A] rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};