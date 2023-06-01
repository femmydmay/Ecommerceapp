import React from "react";
import Card from "../components/Card";
// import Productdetails from "./Productdetails";

const Products = ({ item, color, title }) => {
  return (
    <section className=" my-10 bg-white">
      <header className={` py-4 pl-2 `} style={{ backgroundColor: color }}>
        <p className="font-bold">{title}</p>
      </header>
      <div className=" pro grid grid-cols-products gap-5 ">
        {item.map((mapped_item) => {
          const { img, description, price, discount } = mapped_item;
          return (
            <>
              <Card
                image={img}
                price={price}
                description={description}
                      discount={discount}
                      
              />
              </>
              
          );
        })}
      </div>
    </section>
  );
};

export default Products;
