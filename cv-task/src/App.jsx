import { useState } from 'react'
import './App.css'
import "./assets/sass/style.scss"

function App() {

  return (
    <>

    <header>
      <nav>
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>

        </ul>
      </nav>

    </header>

    <div id="hero">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>


      </ul>
      <div className="box">
        <div className="imge">
          <img src="https://img.freepik.com/premium-vector/cute-hijab-pastel-aesthetic_510538-2.jpg" alt="" />
        </div>
        <h1>Zeyneb Mustafazade</h1>
        <h3>Student, Web Developer & Illustrator</h3>

      </div>
    </div>

    <section id="skills">
      <h2>Skills</h2>
      <div className="cards">
        <div className="card">
          <div className="imge">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="" />

          </div>
          <p>HTML</p>
        </div>
        <div className="card">
          <div className="imge">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" alt="" />

          </div>
          <p>CSS</p>
        </div>
        <div className="card">
          <div className="imge">
          <img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="" />

          </div>
          <p>JavaScript</p>
        </div>
        <div className="card">
          <div className="imge">
          <img src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png" alt="" />

          </div>
          <p>React</p>
        </div>
        <div className="card">
          <div className="imge">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" />

          </div>
          <p>Python</p>
        </div>
      </div>
    </section>

    <section id="about">
      <div className="box">
      <h2>About Me</h2>
      <p>Hi, I'm Zeyneb, and I'm currently studying Information Technology at Azmiu. My passion for technology and creativity drives me to explore various aspects of the IT field, with a particular interest in coding and web design. I love turning ideas into functional, visually appealing websites, and I’m always eager to learn new tools and techniques to improve my skills.

Outside of tech, I enjoy drawing, reading books, and constantly working on personal growth. I'm excited to share my future projects and journey with you here. Thank you for visiting my portfolio!

</p>

      </div>
    </section>
      
    </>
  )
}

export default App
