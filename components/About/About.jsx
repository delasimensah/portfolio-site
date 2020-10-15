import React from "react";
import Image from "next/image";
import myPic from "../../public/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className=" border border-black h-screen py-20 bg-gradient-to-r from-primary to-secondary text-white space-y-10"
    >
      <h1 className="heading uppercase text-center">About me</h1>

      <div className="grid grid-cols-2 gap-20 section border border-red-500">
        <div className="flex justify-center items-center">
          <div className=" w-1/2 h-3/4 shadow-lg rounded-md overflow-hidden">
            <Image src={myPic} alt="my-photo" className="h-full w-full" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, tempora, animi impedit officiis autem earum cum non hic
            laborum repudiandae numquam nisi fugit blanditiis est amet nesciunt
            quis accusantium sint maiores vel maxime inventore! Et doloribus
            amet ullam id consequuntur.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, tempora, animi impedit officiis autem earum cum non hic
            laborum repudiandae numquam nisi fugit blanditiis est amet nesciunt
            quis accusantium sint maiores vel maxime inventore! Et doloribus
            amet ullam id consequuntur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
