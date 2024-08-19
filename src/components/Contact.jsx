import whatsapp from "../assets/whatsapp.png";
import mail from "../assets/mail.png";

function Contact() {
  return (
    <div className="grid justify-center grid-cols-1 m-auto">
      <div className="flex justify-left">
        <img className="w-6 h-6 mr-2" src={mail}></img>
        <p>ventas@claritapp.com</p>
      </div>
      <div className="flex justify-start">
        <img className="w-6 h-6 mr-2" src={whatsapp}></img>
        <p>0983911858</p>
      </div>
    </div>
  );
}

export default Contact;
