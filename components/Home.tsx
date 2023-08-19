/* eslint-disable @next/next/no-img-element */
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="image-wrapper">
        <img
          src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cover Photo"
        />
        <div className="layer"></div>
      </div>
      <div className="home-body">
        <h2>Spicy Cravings</h2>
        <p>
          কুপনটি সংগ্রহ করতে ইউটিউব চ্যানেলটি সাবস্ক্রাইব করুন। এবং ওয়েলকাম ফুড
          বুঝে নিন।
        </p>
        <a href="https://linktw.in/MYgsD9">Get Coupon</a>
      </div>
    </div>
  );
};

export default Home;
