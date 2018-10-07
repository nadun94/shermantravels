import Home from "views/Home/Home.jsx";
import flights from "../views/Flights/Flights";
import Hotels from "../views/Hotels/Hotels.jsx";

import Vacations from "../views/Vacations/Vactions.jsx";
import Cruises from "../views/Cruises/Cruises.jsx";
import Cars from "../views/Cars/Cars";
import fligh from "../views/Flight/flight123.jsx"

var dashRoutes = [

  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/shermanflight",
    name: "Flight",
    icon: "users_single-02",
    component: fligh
  },

  {
    path: "/hotels",
    name: "Hotels",
    icon: "education_paper",
    component: Hotels
  },

  {
    path: "/vacations",
    name: "Vacations",
    icon: "files_paper",
    component: Vacations
  },
   {
    path: "/cruises",
    name: "Cruises",
    icon: "files_paper",
    component:  Cruises
  },
  {
    path: "/cars",
    name: "Cars",
    icon: "users_single-02",
    component: Cars
  },

 
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
