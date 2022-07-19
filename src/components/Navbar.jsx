import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "../components/styles/NavBar.css";

const Navbar = () => {
   const [search, setSearch] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
       console.log(search)
      e.preventDefault();
      
      if (!search) return;

      navigate(`/search?=${search}`);
      setSearch(""); // limpa o formulario apos navegar para o filme buscado
   };

   return (
      <nav id="navbar">
         <h2>
            <Link to="/">
               <BiCameraMovie /> MoviesFlix
            </Link>
         </h2>

         <form type="text" onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Busque um filme"
               onChange={(e) => {
                  setSearch(e.target.value);
               }}
               value={search}
            />
            <button type="submit">
               <BiSearchAlt2 />
            </button>
         </form>
      </nav>
   );
};

export default Navbar;
