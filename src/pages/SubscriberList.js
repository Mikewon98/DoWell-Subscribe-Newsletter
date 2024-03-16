import React, { useEffect, useState } from "react";
import "../styles/SubscriberList.css";
import axios from "axios";

const SubscriberList = () => {
  const [subscribeList, setSubscribeList] = useState("");
  useEffect(() => {
    const getSubscribeList = async () => {
      try {
        const response = await axios.post(
          "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/435753a3-6d46-480d-b248-c21b0c3d81c7/?type=subscriberlist"
        );

        setSubscribeList(response.data.Details.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSubscribeList();
  }, []);

  return (
    <div>
      {subscribeList ? (
        <div>
          {subscribeList?.map((contact, index) => (
            <figure className='figure-class' key={index}>
              <figcaption className='figcaption-class'>
                <p className='text-header'>topic:{subscribeList.topic}</p>
                <p className='text'>
                  <span className='font-medium'>email: </span>
                  {subscribeList.subscriberEmail}
                </p>
                <p className='text'>
                  <span className='font-medium'>phone: </span>
                  {subscribeList.typeOfSubscriber}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div> No Subscribes </div>
      )}
    </div>
  );
};

export default SubscriberList;
