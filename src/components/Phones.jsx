import { useContext } from "react"
import {PhoneContext } from "../Root/Root"
import Phone from "./Phone"


export default function Phones() {

    const phones = useContext(PhoneContext)
  

  return (
    <>
    <h2 className="text-2xl text-center mt-8"> Our Phones Collections </h2>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8"> 

      {phones.map(phone => <Phone key={phone.id} phone={phone} />)}
    </section>
    </>
  )
}
