import React from "react";
import { customersData } from "../../../data/customersSay";
// import avatar1 from "../assets/avatar1.jpeg";
import { Section } from "./styles";

export default function Customers() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          {customersData.map((testimonials) => {
            return (
              <div className="testimonial">
                <div className="image">
                  <img src={testimonials.image} alt="" />
                </div>
                <p>
                  {testimonials.description}
                  <span>{testimonials.title}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
