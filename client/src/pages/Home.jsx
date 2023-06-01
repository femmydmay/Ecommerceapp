import Products from "../components/Products";
import { limited_stock, top_selling } from "../pages/product_list";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/get-products")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setimage(data);
          setdescription(data);
          setprice(data);
          setdiscount(data);
          setData(data);
        }
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const handleSubmit = async (event, data) => { 
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cart/add-cart', data)
    console.log(data)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(products);

  return (
    <>
      <div className="">
        {data.map((data) => {
        
          return (
            <form className="Products   bg-slate-400" key={data.image} onSubmit= {(event)=>handleSubmit(event,data)}>
              <div className="containerfront">
                <Link to={`/Products/${data.title}`}>
                  <div>
                    <section>
                      <img
                        className="border-yellow-600 border-8  bg-yellow-700 m-20 mt-10 w-80"
                        src={data?.image}
                        alt=""
                      />
                    </section>

                    <section>
                      {/* <h2>{data?.image}</h2> */}
                      <p className=" bg-zinc-100  w-80 shadow-2xl rounded ml-20 text-xl font-bold">
                        {data?.description}
                      </p>
                      <p className="ml-20 mt-5 text-xl font-bold">
                        {data?.price}
                      </p>
                    </section>
                  </div>
                </Link>
                      <button>Submit</button>
              </div>
            </form>
          );
        })}
      </div>
      
      ;
   
    </>
  );
};

export default Home;
