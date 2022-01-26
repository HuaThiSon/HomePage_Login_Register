import React from "react";
import {Section} from "./styles";
import { productdata } from "../../../data/productData";
export default function Products() {
  return (
    <Section id="/Product">
      <div className="title">
        <h1>
          <span>Prominent House</span> All the time!
        </h1>
      </div>
      <div className="products">
        {productdata.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.decription}</p>
              <button>Rent Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}