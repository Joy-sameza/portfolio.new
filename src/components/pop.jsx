import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

function newMsg(data) {
  axios
    .post("http://localhost:3001/msg/new-msg", data, config)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export default function Pop({ open, close }) {
  const error = useRef("");
  const { register, handleSubmit } = useForm();
  const msgSubmit = (data) => {
    if (!data.msg) return;
    newMsg(data);
  };

  //   if (!open) return null;
  return (
    <div className="pop-box" id="pop-box">
      <div className="pop-container">
        <button type="button" className="closeBtn" onClick={() => close()}>
          &times;
        </button>
        <h2 className="styled">Get in Touch</h2>
        <form onSubmit={handleSubmit(msgSubmit)}>
          <small className="error" ref={error}></small>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" id="name" {...register("name")} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email" id="email" {...register("email")} />
          </div>
          <div className="form-group">
            <label htmlFor="msg">Message</label>
            <textarea name="msg" placeholder="Message" id="msg" {...register("msg")} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
