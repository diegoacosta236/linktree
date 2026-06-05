import './App.css'
import { FaLinkedin, FaGithub, FaSuitcase, FaPaperclip  } from "react-icons/fa";

// The Function
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!"
  } else {
    return "Good evening!"
  }
};

function App() {

  return (
    <div className='page-container'>

        {/* Greeting Function! */}

        <h2>{getGreeting()}</h2>

        {/* Profile Information */}
        <div className='info-section'>
          <div className='pfp'><img src='/pfp.jpg' alt='Diego Acosta'/></div>
          <h1>Diego Acosta</h1>
          <p>Recent CSU, Stanislaus Graduate. Computer Science major with a minor in Biology.</p>
        </div>

        {/* Main Links */}
        <nav className='links'>

            <a 
              className='link-card' 
              href='/resume.pdf' 
              target='_blank'>
                <FaPaperclip/>
                Resume
            </a>

            <a 
              className='link-card'
              href='https://diegoacosta236.github.io'
              target='_blank'>
               <FaSuitcase/>
                Portfolio
            </a>

            <a className='link-card'
              href='https://www.linkedin.com/in/diego-a-acosta'
              target='_blank'>
                <FaLinkedin/>
                LinkedIn
            </a>

            <a 
              className='link-card' 
              href='https://github.com/diegoacosta236' 
              target='_blank'>
                <FaGithub/>
                GitHub
            </a>

          </nav>

    </div>
  )
}

export default App
