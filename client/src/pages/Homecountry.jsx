// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


// const Homecountry = () => {

   
//   const [countries, setCountries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           setCountries(data);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(true);
//       });
//   }, []);

//   // console.log(countries);

//   return (
    
 
//     <div>
//       {isLoading ? (
//         <p>loading...</p>
        
//       ) : (
//         <div className="container">
//           {countries.map((country) => {
//             // console.log(country);
//             return (
//               <div className="country" key={country.name.common}>
//                 <Link to={`/country/${country.name.common}`}>
//                   <section>
//                     <img src={country.flags.png} alt="" />
//                   </section>
//                   <section>
//                     <h2>{country.name.common}</h2>
//                     <p>{country.population}</p>
//                     <p>{country.region}</p>
//                     <p>{country.capital}</p>
//                   </section>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
    
//   );
// }

// export default Homecountry;
