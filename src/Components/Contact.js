import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-sm"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-sm"
          placeholder="message"
        ></input>
        <button className="border border-black cursor-pointer rounded-lg font-bold bg-amber-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
