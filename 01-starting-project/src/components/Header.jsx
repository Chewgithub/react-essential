import reactImg from '../assets/react-core-concepts.png';
import './Header.css';
const description = ["Fundamental", "Crucial", "Core"]

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const describe = description[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {describe} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}



export default Header;// File: src/components/Header.jsx