import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Root() {
  return (
    <>
    <Header/>

   <section className="max-w-[1500px] mx-auto my-14">
   <Outlet/>
   </section>

    <Footer/>
    </>
  )
}
