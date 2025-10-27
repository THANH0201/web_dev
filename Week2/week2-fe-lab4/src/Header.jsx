function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/information">Information</a>
        <a href="/contact">Contact</a>
        <a href="/book-appointment">Book appointment</a>
      </nav>

      <div className="login">
        <a href="/login" className="login-link">Log in</a>
      </div>
    </header>
  );
}
export default Header;