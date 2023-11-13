

const Footer = () => {
    return (
        <>
        <footer className="footer footer-center p-10 bg-neutral text-white grid grid-cols-1 lg:grid-cols-2">
  <nav className="">
    <header className="footer-title">CONTACT US</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Follow US</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>

        </>
    );
};

export default Footer;