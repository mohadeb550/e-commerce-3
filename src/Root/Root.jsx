import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext } from "react";


export const PhoneContext = createContext();

export default function Root() {

 const phones = useLoaderData();

  return (
    <>

    <PhoneContext.Provider value={phones}>

    <Header/>

   <section className="max-w-[1500px] mx-auto my-14">
   <Outlet/>
   </section>

    <Footer/>

    </PhoneContext.Provider>
    </>
  )
}
