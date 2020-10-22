import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

//components
import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="bg-tertiary">
      <Container>
        <div className="flex flex-col items-center justify-center py-5 bg-tertiary space-y-14">
          <Link to="top" smooth duration={1000} className="cursor-pointer">
            <FaChevronUp className="w-6 h-6 text-white animate-bounce" />
          </Link>

          <div className="flex items-center space-x-20">
            <a
              href="https://github.com/delasimensah"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.instagram.com/delasimensah/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/delasi-mensah-38166b214/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="icon" />
            </a>
          </div>

          <div className="w-2/3 h-px bg-white" />

          <p>copyright</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
