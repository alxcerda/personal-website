import React from "react";
import Title from "../components/Title";
import "firebase/database";
import { useInput } from "../lib/hooks/useInput";
import firebase from "firebase";

export default function Contact() {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    const db = firebase.firestore();

    db.collection("contacts").add({
      name,
      email,
      message,
    });

    resetName();
    resetEmail();
    resetMessage();
  }

  return (
    <div className="fade-in-slow w-full">
      <Title title="Contact" description="Let's connect" />
      <div className="flex flex-col items-center">
        <form
          className="w-1/2 xs:w-full pt-10 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col p-2 w-full">
            <label> Name *</label>
            <input className="pl-2 border" type="text" {...bindName} required />
          </div>
          <div className="flex flex-col p-2 w-full">
            <label> Email address*</label>
            <input
              className="pl-2 border"
              type="email"
              {...bindEmail}
              required
            />
          </div>
          <div className="flex flex-col p-2 w-full">
            <label> Message *</label>
            <textarea
              className="pl-2 border w-full"
              {...bindMessage}
              required
            />
          </div>
          <button
            className="border mt-5 w-40 hover:bg-gray-100 py-1"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
