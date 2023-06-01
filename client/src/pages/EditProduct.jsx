import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const EditProduct = () => {
    const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); //use is not defined
  const { title: typetitle } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/single/${typetitle}`)
      .then((res) => {
        return res.json();
        console.log(res.data);
      })
      .then((json) => {
          setTitle(json.title)
          setDescription(json.description)
          setPrice(json.price)
          setData(json)
      });
  }, []);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("price", price);
      formdata.append("description", description);
      formdata.append("file", file[0]);

      event.preventDefault();
      const resp = await axios.patch(
        `http://localhost:5000/products/single/${typetitle}`,
        formdata
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center ">
          <p className="font-bold text-[1.5rem]">Admin Dashboard/Product</p>
        </div>

        <div className=" gap-5 mx-[10%]">
                  <div className="b-[#75aee7] w-[90%] h-[40vh] border border-[#1976d2] rounded-[10px]">
                      <img src={data.image} alt="" className="w-40" />
          </div>
          <p className="font-semibold">Upload Image</p>
          <input
            type="file"
            class="imagepload"
            id="file"
            className="mt-2"
            onChange={(event) => setFile(event.target.files)}
            
          />

          <button class="px-4 py-0 text-white bg-green-500 rounded shadow-xl">
            Add image
          </button>
        </div>
        <div className="mt-10 mx-[10%]">
          <div className="">
            <p className="font-semibold">Title</p>
          </div>
          <input
            type="textarea"
            name=""
            id=""
            cols="30"
            rows="10 "
            className="h-[8vh] w-[90%] border border-[#1976d2] outline-none rounded-[10px] text-[1.2rem]"
            placeholder="Add a Titile...."
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div className="mx-[10%] mt-10">
          <p className="font-bold text-[1.3rem]">Description</p>
          <textarea
            name=""
            id="text"
            cols="30"
            rows="10"
            placeholder="Type here... "
            className="border border-[#1976d2] outline-none rounded-[10px] w-[90%] h-[20vh] text-[1.2rem]"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </div>

        <div className="mx-[10%] mt-10">
          <div className="font-bold text-[1.3rem]">
            <p>Price</p>
          </div>
          <input
            type="textarea"
            className="h-[5vh] w-[50%] border border-[#1976d2]  pt-1 outline-none rounded-[10px]  text-[1.2rem]"
            placeholder="type amount $ "
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </div>

        <div className="mx-[10%] mt-10">
          <button class="rounded-full bg-[#1976d2] text-white w-[50%] height-[10vh]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditProduct;
