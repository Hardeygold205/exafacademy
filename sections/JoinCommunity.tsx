import Image from "next/image";
import React from "react";

function JoinCommunity() {
  return (
    <div className="w-full min-h-5/12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
        <Image
          src="/hero_img.jpg"
          alt="Join Community Illustration"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <div className="text-center md:text-left gap-5 flex flex-col md:items-start justify-center items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-4 lg:leading-16">
            Join the largest community of Extension Professionals
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-black mb-6">
            Afrexa offers many ways to get instant answers, spark discussions,
            and find the support you need to truly thrive. Dive in and discover
            a whole new dimension to your learning experience!
          </p>
          <a
            href="/register"
            className="inline-block bg-primary text-center max-w-md w-full text-white px-6 py-3 rounded-full text-lg font-medium hover:scale-95 transition">
            Join Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
