import React from "react";
import Image from "next/image";

import ai from "../../public/images/ai.svg";
import discussion from "../../public/images/discussion.svg";
import marketing from "../../public/images/marketing.svg";
import money from "../../public/images/money.svg";
import seo from "../../public/images/seo.svg";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const details = [
  {
    img: discussion,
    title: "Non-Binding Introductory Meeting",
    text: `The first meeting or call is always free and non-binding. It
    serves the purpose of defining the scope of the project and
    talking about possible solutions. If the expectations are not
    met in the end for whatever reason, that's unfortunate, but
    definitely not a problem.`,
  },
  {
    img: money,
    title: "Transparent Pricing",
    text: `The price of a project will vary depending on the scope of the project. Only if the scope of the project changes during development will the price be adjusted accordingly with prior agreement. Therefore it is always clear on what the final price will be, and there will be no surprises.
    `,
  },
  {
    img: marketing,
    title: "Personal Relationship",
    text: `You won't be dealing with a big web agency. This makes the relationship more personal, as I will be your contact person throughout the entire process for any inquiries. If you have any requests that go beyond my range of services, I can readily rely on a network of competent freelancers and third party services.`,
  },
  {
    img: ai,
    title: "State of the Art Solutions",
    text: `It is ${new Date().getFullYear()} and you should see that in the final product. This means much more than responsiveness and cross-browser-compatibility and involves best practices regarding performance, accessibility, security and usability. This results in secure websites and applications, fast load times and happy customers.`,
  },
  {
    img: seo,
    title: "Technical SEO",
    text: `You want customers to find your website / web application on search engines, especially on Google. Having the right content is the best way to get there. But besides that, there's a lot of things that can be done that are going to influence your ranking. Performance, accessibility and having static assets to name just a few.`,
  },
];

const Details = () => {
  return (
    <section className="text-white gradient">
      <Container>
        <Title text="details" className="text-white" />

        <p>
          Creating a relationship of trust and a pleasant atmosphere is
          essential for every successful partnership. Therefore, when working as
          a freelancer, the following aspects are part of all of my projects:
        </p>

        <div className="space-y-10">
          {details.map((detail, idx) => {
            return (
              <div
                key={idx}
                className="items-center space-y-2 lg:flex lg:space-y-0"
              >
                <div className="items-center justify-center w-full lg:flex lg:w-1/5">
                  <div className="w-20">
                    <Image src={detail.img} alt="" />
                  </div>
                </div>

                <div className="w-full space-y-2 lg:w-4/5">
                  <h5 className="font-bold">{detail.title}</h5>
                  <p>{detail.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Details;
