import React from "react";
import { serviceData } from "../../../data/serviceData";
import { Section } from "./styles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="#495057">What we do?</h1>
        <p>
          If you're looking for houses for rent, HS House features thousands of
          listings in every state in the U.S. We make the process easy and
          straightforward with filters that can narrow down your search by
          state, county, city, and zip code.
        </p>
      </div>
      <div className="services">
        {serviceData.map((services) => {
          return (
            <div className="service">
              <img src={services.image} alt="" />
              <p>
                {services.description} <span>{services.title}</span>
              </p>
              <button>{services.read}</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
