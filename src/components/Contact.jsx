import { CONTACT } from "../constants"


const Contact = () => {
  return (
   <div className="border-b border-neutral-800 pb-4">
    <h1 className="text-4xl text-center my-10">Get in Touch</h1>
    <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.email}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
    </div>
   </div>
  )
}

export default Contact