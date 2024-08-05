import React, { useState } from "react";
import Layout from "../../Components/Layout";

function MyAccount() {
  //move this to context when you can xD
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Main St");
  const [phone, setPhone] = useState("555-1234");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can update the user information in your backend
    console.log(name, address, phone);
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">User Information</h1>
        <figure className="p-2">
          <img src="/avatar.svg" alt="" />
        </figure>
        <form onSubmit={handleSubmit} >
          <div className="mb-2">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className= "flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default MyAccount;