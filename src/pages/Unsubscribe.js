import React, { useState } from "react";
import axios from "axios";

// 435753a3-6d46-480d-b248-c21b0c3d81c7

const Unsubscribe = () => {
  const [topic, setTopic] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [typeOfSubscriber, setTypeOfSubscriber] = useState("");
  const [reasonToUnsubscribe, setReasonToUnsubscribe] = useState("");

  const handleUnubscribe = async () => {
    const response = await axios.post(
      "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/435753a3-6d46-480d-b248-c21b0c3d81c7/?type=unsubscribe",
      {
        headers: { "Content-Type": "application/json" },
      },
      {
        topic: { topic },
        subscriberEmail: { subscriberEmail },
        typeOfSubscriber: { typeOfSubscriber },
        reasonToUnsubscribe: { reasonToUnsubscribe },
      }
    );
  };

  return (
    <div className='subscribe-container'>
      <h1>Unsubscribe</h1>
      <p>Enter the neccessary info to unsubscribe</p>

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
            name={subscriberEmail}
            placeholder='Email'
            onChange={(e) => setSubscriberEmail(e.target.value)}
          ></input>
          <input
            type='text'
            value={typeOfSubscriber}
            placeholder='Type of Subscriber'
            onChange={(e) => setTypeOfSubscriber(e.target.value)}
          ></input>

          <input
            type='text'
            value={reasonToUnsubscribe}
            placeholder='Reason to Unsubscribe'
            onChange={(e) => setReasonToUnsubscribe(e.target.value)}
          ></input>
        </div>

        <div className='form-button'>
          <button
            className='subscribe-button'
            type='submit'
            onClick={handleUnubscribe}
          >
            Unsubscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Unsubscribe;
