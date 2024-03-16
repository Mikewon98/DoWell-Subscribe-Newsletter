import React, { useState } from "react";
import axios from "axios";
import "../styles/SubscribeNewsletter.css";

const SubScribeNewsletter = () => {
  const [topic, setTopic] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [typeOfSubscriber, setTypeOfSubscriber] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/435753a3-6d46-480d-b248-c21b0c3d81c7/?type=subscribe",
        {
          headers: { "Content-Type": "application/json" },
        },
        {
          topic: topic,
          subscriberEmail: subscriberEmail,
          typeOfSubscriber: typeOfSubscriber,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='subscribe-container'>
      <h1>Subscribe</h1>
      <p>Sign up with your email adress to receive newsletter</p>

      <form>
        <div className='form-inputs'>
          <input
            type='text'
            value={topic}
            placeholder='Topic'
            onChange={(e) => setTopic(e.target.value)}
          ></input>
          <input
            type='email'
            value={subscriberEmail}
            placeholder='Email'
            onChange={(e) => setSubscriberEmail(e.target.value)}
          ></input>
          <input
            type='text'
            value={typeOfSubscriber}
            placeholder='Type of Subscriber'
            onChange={(e) => setTypeOfSubscriber(e.target.value)}
          ></input>
        </div>

        <div className='form-button'>
          <button className='subscribe-button' onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubScribeNewsletter;
