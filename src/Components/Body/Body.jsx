import { FaArrowRight, FaAws, FaCode, FaJs, FaPencilRuler, FaReact, FaServer } from "react-icons/fa";
import { SiGraphql, SiNextdotjs, SiPostgresql, SiPython, SiTypescript } from "react-icons/si";
import avi from '../Assets/img1.png';
import images from '../Assets/me.png';
import project from '../Assets/Prism Analytics.png';
import trendmart from '../Assets/Void_Protocol visualization.png';
import Footer from "../Footer/Footer.jsx";
import Header from '../Header/Header.jsx';
import './Body.css';


const Body = () => {
    return (
        <div className="home">
            <Header />
            <main>
               <div className="container">
                <div className="home-container">
                     <div className="home1">
                       <h4>● Full-Stack Developer</h4>
                     </div>
                      <div className="hero">
  <h1 className="hero-title">
    Crafting Digital <br />
    <span className="highlight">Experiences</span> <br />
    Through Code
  </h1>
</div>
                       
                     <div className="home3">
                      <h2>Architecture-level engineering for the modern web.<br />Specialized in building scalable, neon-infused systems <br />that bridge the gap between human and machine.</h2>

                     </div>
                     <div className="home4">
                        <div className="btn1">
                            <button>INITIALIZE PROJECT ●</button>
                        </div>
                        <div className="btn2">
                            <button>VIEW PROTOCOLS</button>
                        </div>
                     </div>
                </div>
                <div className="frame-container">
                  <div className="frame-wrapper">
    
                    <img src={images} alt="Frame" className="frame-image" />
                     </div>
                </div>
               </div>


                <div className="skill-container">
  <div className="main-section">

    <div className="main-head">
      <div className="leftside-head">
        <div className="head1">
          <h4>SKILL MATRIX</h4> 
        </div>
        <div className="head2">
          <h2>Core Infrastructure</h2>
        </div>
      </div>

      
    </div>

    <div className="main-body">

      {/* CARD 1 */}
      <div className="card">
        <div className="icon">
      <FaCode />
    </div>
        <h3>Frontend Engineering</h3>
        <div className="tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
        </div>
        <div className="progress">
          <div className="bar" style={{width: "94%"}}></div>
        </div>
        <div className="percent">94%</div>
      </div>

      {/* CARD 2 */}
      <div className="card">
        <div className="icon purple">
      <FaServer />
    </div>
        <h3>Systems Architecture</h3>
        <div className="tags">
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>
        <div className="progress purple">
          <div className="bar" style={{width: "88%"}}></div>
        </div>
        <div className="percent">88%</div>
      </div>

      {/* CARD 3 */}
      <div className="card">
        <div className="icon">
      <FaPencilRuler />
    </div>
        <h3>UX Synthesis</h3>
        <div className="tags">
          <span>Figma</span>
          <span>WebGL</span>
          <span>Framer</span>
        </div>
        <div className="progress">
          <div className="bar" style={{width: "82%"}}></div>
        </div>
        <div className="percent">82%</div>
      </div>

    </div>
  </div>
</div>

<div className="deploy">
  <div className="deploy-main">
    
    <div className="deploy-head">
      <h2>DEPLOYMENTS</h2>
    </div>

    <div className="deploy-grid">

      {/* CARD 1 */}
      <div className="deploy-card">
        <img src={project} alt="" />

        <div className="overlay"></div>

        <div className="card-content">
          <span className="tag">AI INFRASTRUCTURE</span>
          <h3>Neural_Net_V2</h3>
          <p>
            Real-time data visualization platform for deep learning model
            analysis and deployment monitoring.
          </p>
          <FaArrowRight className="arrow" />
        </div>
      </div>

      {/* CARD 2 */}
      <div className="deploy-card">
        <img src={trendmart} alt="" />

        <div className="overlay"></div>

        <div className="card-content right">
          <span className="tag purple">CYBERSECURITY</span>
          <h3>Void_Protocol</h3>
          <p>
            An encrypted communications layer built on decentralized mesh
            networks for zero-trust environments.
          </p>
          <FaArrowRight className="arrow" />
        </div>
      </div>

      {/* CARD 3 */}
      <div className="deploy-card large">
        <img src={avi} alt="" />

        <div className="overlay"></div>

        <div className="card-content bottom">
          <span className="tag blue">FINTECH MODULE</span>
          <h3>Prism_Analytics</h3>
          <p>
            High-frequency trading dashboard with sub-millisecond data refresh
            cycles.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>




<div className="core-dev">
  <div className="core-container">

    <h2 className="core-title">Core Development</h2>

    <div className="core-grid">

      <div className="core-item">
        <SiPython />
        <p>PYTHON</p>
      </div>

      <div className="core-item">
        <FaJs />
        <p>JAVASCRIPT</p>
      </div>

      <div className="core-item">
        <SiTypescript />
        <p>TYPESCRIPT</p>
      </div>

      <div className="core-item">
        <SiPostgresql />
        <p>POSTGRESQL</p>
      </div>

      <div className="core-item">
        <FaReact />
        <p>REACT</p>
      </div>

      <div className="core-item">
        <SiNextdotjs />
        <p>NEXT.JS</p>
      </div>

      <div className="core-item">
        <SiGraphql />
        <p>GRAPHQL</p>
      </div>

      <div className="core-item">
        <FaAws />
        <p>AWS</p>
      </div>

    </div>
  </div>
</div>


<div className="connection-section">
  <div className="connection-container">

    {/* LEFT SIDE */}
    <div className="connection-left">
      <h2>Systems Defined by Purpose</h2>

      <p>
        I don't just build websites; I engineer digital ecosystems.
        My philosophy is rooted in technical precision and intentional design.
        Every line of code serves a purpose, and every pixel is placed with strategic intent.
      </p>

      <div className="contact-info">
        <div className="info-item">
          <span>@</span>
          <p>sarbanibhattacharjee61@gmail.com</p>
        </div>

        <div className="info-item">
          <span>◎</span>
          <p>Distributed Node: Berlin_DE</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="connection-right">
      <h3>Initialize Connection</h3>

      <form className="connection-form">

        <div className="input-group">
          <label>PROTOCOL NAME</label>
          <input type="text" placeholder="ID: USER_IDENTIFIER" />
        </div>

        <div className="input-group">
          <label>COMMUNICATION CHANNEL</label>
          <input type="email" placeholder="EMAIL: PROTOCOL@CHANNEL.COM" />
        </div>

        <div className="input-group">
          <label>REQUEST DATA</label>
          <textarea placeholder="DESCRIBE YOUR VISION..."></textarea>
        </div>

        <button className="send-btn">
          SEND TRANSMISSION →
        </button>

      </form>
    </div>

  </div>
</div>


            </main>
             <Footer /> 
        </div>
    );
};

export default Body;

