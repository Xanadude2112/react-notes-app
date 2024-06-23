import "../styles/Header.scss";
import image from "../images/lily.png"

function Header({ handleLightMode, lightMode }) {
  return (
    <div className="header">
      <div className="title">
        <h1 className="h1">NotePadd</h1>
        <div className="image-div">
       <img className="image" src={image} alt="lily" />
        </div>
      </div>
      <button className="mode" onClick={() => handleLightMode((prev) => !prev)}>
        {lightMode ? (
          <i className="fa-solid fa-moon moon"></i>
        ) : (
          <i className="fa-solid fa-sun sun"></i>
        )}
      </button>
    </div>
  );
}

{
  /* <i class="fa-solid fa-moon moon"></i> */
}
export default Header;
