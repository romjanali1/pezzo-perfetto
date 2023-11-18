import { FaFacebookF, FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  
  const currentYear = new Date().getFullYear();


    return (
        <>
        <footer className="footer footer-center p-10 bg-neutral text-white grid grid-cols-1 lg:grid-cols-2">
  <nav className="">
    <header className="footer-title">CONTACT US</header> 
    <p className="link link-hover">Natore, Bangladesh</p>
    <p className="link link-hover">webdeveloperromjanali@gmail.com</p>
  </nav> 
  <nav>
    <header className="footer-title">Follow US</header> 
    <p>Join us on social media</p>
    <div className="flex space-x-4">
    <a href="https://www.facebook.com/mnhRomjanAli"><FaFacebookF size = '35px'/></a>
    <a href="https://www.linkedin.com/in/romjan-ali-b3b11627a/"><FaLinkedinIn size = '35px'/></a>
    <a href="https://wa.link/piw7fb"><FaWhatsappSquare size = '35px'/></a>
    </div>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © {currentYear} - All right reserved.</p>
  </aside>
</footer>

        </>
    );
};

export default Footer;