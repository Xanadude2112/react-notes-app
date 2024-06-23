import { useEffect } from "react";
import "../styles/Footer.scss"

function Footer() {

   // KEEP YEAR UP TO DATE
   useEffect(() => {
    const setYear = () => {
      const yearElement = document.querySelector(".year");
      const currentYear = new Date().getFullYear();
      if (yearElement) {
        yearElement.textContent = currentYear;
      }
    };

    setYear();
  }, []);

  return (
    <footer className="footer">
      <p>
        ©️ <span className="year"></span>, Thomas Azran
      </p>
      <a href="#">
        <img
          class="logo"
          src="src/images/lily.png"
          alt="lilypad"
        />
      </a>
      <div className="foot-links">
        <a
          href="https://github.com/Xanadude2112?ocid=AIDcmmli8vlwie_SEM__k_CjwKCAjwz42xBhB9EiwA48pT73R3rGzK6faT4XlP4V1dYOjLlnTz-ArhfQo7Yn-g9SPcgxL3gXDa3xoCeb4QAvD_BwE_k_"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:tommy.azran@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/thomas-azran-b3427b311/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://azranhq.netlify.app/">
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer