import { useState } from 'react'
import './App.css'
import styles from "./assets/sass/Style.module.scss"
function App() {

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>John Doe</h1>
        <p className={styles.subtitle}>Web Developer | UI/UX Designer</p>
      </header>

      <section className={styles.profile} id="profile">
        <div className={styles.container}>
          <div className={styles.profileImage}>
            <img
              src="profile.jpg"
              alt="John Doe"
              className={styles.profilePic}
            />
          </div>
          <div className={styles.profileInfo}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.text}>
              I am a passionate web developer with experience in building
              responsive and user-friendly websites. I love problem-solving and
              creating elegant solutions for complex problems.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.skills} id="skills">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Skills <span className={styles.highlight}>Set</span>
          </h2>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>JavaScript</li>
            <li className={styles.skillItem}>React</li>
            <li className={styles.skillItem}>SCSS</li>
            <li className={styles.skillItem}>Node.js</li>
            <li className={styles.skillItem}>Git</li>
          </ul>
        </div>
      </section>

      <section className={styles.experience} id="experience">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.experienceItem}>
            <h3 className={styles.jobTitle}>Frontend Developer</h3>
            <p className={styles.companyName}>TechCorp</p>
            <p className={styles.duration}>Jan 2020 - Present</p>
            <p className={styles.jobDescription}>
              Developed and maintained web applications using React and JavaScript.
            </p>
          </div>
          <div className={styles.experienceItem}>
            <h3 className={styles.jobTitle}>Web Designer</h3>
            <p className={styles.companyName}>DesignStudio</p>
            <p className={styles.duration}>Jun 2018 - Dec 2019</p>
            <p className={styles.jobDescription}>
              Designed user interfaces and created responsive web designs.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.education} id="education">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationItem}>
            <h3 className={styles.degree}>Bachelors in Computer Science</h3>
            <p className={styles.institution}>University of Tech</p>
            <p className={styles.year}>2015 - 2019</p>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <ul className={styles.contactInfo}>
            <li>Email: johndoe@email.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Website: www.johndoe.com</li>
          </ul>
        </div>
      </section>


      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; 2024 John Doe. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
