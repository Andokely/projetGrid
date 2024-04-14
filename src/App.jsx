import React, { useState } from "react";

export const App = () => {

  return (
    <div className="flex items-center bg-slate-600 justify-center h-screen">
      <div className="p-8 bg-white rounded-lg shadow-md w-96 shadow-gray-400">
        <h2 className="text-2xl text-blue-600 text-center font-bold">
          Se connecter
        </h2>
        <hr className='my-3 h-[2px] rounded-xl' />
        <div>
          <form
            action=""
            className="flex flex-col space-y-4"
          >
            <label htmlFor="username" className="text-gray-600">
              Nom d'utilisateur :
            </label>
            <input
              type="text"
              name="username"
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
              className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Mot de passe"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              XXXXXXX
            </button>
          </form>
        </div>
        <div className="mt-4">
          <button
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Vous n' avez pas encore un compte ? Créer ici
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

