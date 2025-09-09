import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <NavLink to="/">Homepage</NavLink>
               </li>
               <li className="me-3">
                <NavLink to="/about">Chi siamo</NavLink>
               </li>
               <li className="me-3">
                <NavLink to="/products">Prodotti</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar
