import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  width: 100%;
  color: var(--terracotta);
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--terracotta);
    background-color: var(--light-2);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 1rem 4rem;
    cursor: pointer;
    background-color: var(--light-2);
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <FormStyles>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              email="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              message="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyles>
    </div>
  );
}
