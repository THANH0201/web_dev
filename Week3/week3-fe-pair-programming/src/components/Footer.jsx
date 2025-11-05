function Footer() {
  return (
    <div>
      <footer className="section footer">
      <ul className="footer-links" id="nav-links">
        <li><a href="#home" className="footer-link">home</a></li>
        <li><a href="#about" className="footer-link">about</a></li>
        <li><a href="#services" className="footer-link">services</a></li>
        <li><a href="#tours" className="footer-link">tours</a></li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="footer-icon"><i
              className="fab fa-facebook"></i></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="footer-icon"><i
              className="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="https://www.squarespace.com/" target="_blank" rel="noreferrer" className="footer-icon"><i
              className="fab fa-squarespace"></i></a>
        </li>
      </ul>
      <p className="copyright">
        copyright © travel tours company <span id="date"></span>. all rights reserved
      </p>
      <script>
        // Get the current year
        const currentYear = new Date().getFullYear();
        // Insert it into the span
        document.getElementById("date").textContent = currentYear;
      </script>

    </footer>
    </div>
  );
}

export default Footer;
