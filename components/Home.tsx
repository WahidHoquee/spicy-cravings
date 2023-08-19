/* eslint-disable @next/next/no-img-element */
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <img src="/recipe.jpg" alt="Cover Photo" />
      <div className="home-body">
        {/* <h2>Subscribe Youtube Now</h2> */}
        <h2>Spicy Cravings</h2>
        <p>
          কুপনটি সংগ্রহ করতে ইউটিউব চ্যানেলটি সাবস্ক্রাইব করুন। এবং ওয়েলকাম ফুড
          বুঝে নিন।
        </p>
        <a href="https://www.youtube.com/@spicycravings4113">Get Coupon</a>
      </div>
    </div>
  );
};

export default Home;
