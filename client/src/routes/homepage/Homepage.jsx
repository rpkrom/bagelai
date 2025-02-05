import './homepage.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Bagel AI</h1>
        <h2>Super charge your developement with Bagel AI</h2>
        <h3>Using the latest AI chat api developers have seen increase in productivity and delivering software</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot"></img>
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: What is Javascript?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: JavaScript is a programming language that enables you to develope and interact with web pages.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: What are some new front end technologies?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: React, Angular, Vue are some of the popular front end technologies.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/bagels-med-white.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
          <span>|&nbsp;&nbsp;&nbsp;{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;