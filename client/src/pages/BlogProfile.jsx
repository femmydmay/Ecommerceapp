// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { BsArrowLeft } from "react-icons/bs";

// import React from "react";

// const BlogProfile = () => {
//   const [country, setCountry] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const { name } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           setCountry(data[0]);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         setIsLoading(false);
//       });
//   }, []);
//   console.log(country);
//   if (isLoading) return <h1>loading</h1>;
//   console.log(Object.values(country.languages));
//   return (
//     <div>
//       <button className="back" onClick={() => navigate("/")}>
//         <BsArrowLeft className="icon" /> Back
//       </button>
//       <div className="country_details">
//         <section>
//           <img src={country?.flags?.png} alt="" />
//         </section>
//         <section>
//           <h1>{country.name.official}</h1>
//           <div className="det">
//             <div className="">
//               <p>
//                 {" "}
//                 <span>Native name</span> : {country.name.common}
//               </p>
//               <p>
//                 {" "}
//                 <span>Population</span> : {country.population}
//               </p>
//               <p>
//                 {" "}
//                 <span>Region</span> : {country.region}
//               </p>
//               <p>
//                 <span>Sub Region</span>: {country.subregion}
//               </p>
//               <p>
//                 <span>Capital</span>: {country.capital}
//               </p>
//             </div>
//             <div>
//               <p>
//                 <span>Capital</span>: {country.tld}
//               </p>
//               <p>
//                 <span> Currencies</span>: {Object.keys(country.currencies)},{" "}
//                 {Object.values(country.currencies)[0].symbol}
//               </p>
//               <p>
//                 <span> Languages: </span>
//                 {Object.values(country.languages).map((language, index) => {
//                   return language + " ,";
//                 })}
//               </p>
//             </div>
//           </div>
//           <div className="btn_con">
//             <span> Border Countries: </span>
//             {country.borders?.map((border) => {
//               return <button> {border}</button>;
//             })}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
// export default BlogProfile;
