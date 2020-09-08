import React, {useState} from 'react';
import './App.css';
import dataSet from './data.json';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';

function App() {

  const [formData, setFormData] = useState({});
  const [data, setData] = useState(JSON.parse(JSON.stringify(dataSet)));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const visitSection = (mode) => {
    debugger;
    if (mode === 1) {
      let ele = document.getElementById('section');
      ele.scrollIntoView();
    } else if (mode === 2) {
      let ele = document.getElementById('portfolio-skills');
      ele.scrollIntoView();
    }
  }

  return (
    <div>
      <header onClick={() => visitSection(1)}>
        <div>
          <span className="titleLogo">
            {data.titleSec1}
          </span>
          <span className="titleLogo dot">
            {data.titleSec2}
          </span>
          <span className="titleLogo">
            {data.titleSec3}
          </span>
        </div>
        <div>
          <span className="intro">{data.titleSec4}</span>
        </div>
        <br/>
        <div>
          <span className="intro1">a boutique capital advisory services firm</span>
        </div>
        <div>
          <i className='fas fa-angle-down'></i>
        </div>
      </header>
      <section id="section">
        {
          data.QnA.map(el => 
            <div className="section">
              <div className="heading">
                <span>{el.ques}</span>
              </div>
              <div className="description">
                <p>{el.desc}</p>
              </div>
            </div> 
          )
        }
        <div className="section quote-section">
          <span className="quote">
            “{data.quote}”
          </span>
        </div>
      </section>
      <footer className="footer">
        <div className="contact-box">
          <div>
            <p className="copyright-text">Contact us  :  {data.email} </p>
            <p className="copyright-text">Whatsapp :  {data.contactNo} </p>
          </div>
          <div className="social-box">
            {
              data.facebook ? 
              <a href={data.facebook} target="blank"><img src={facebook}  alt="facebook"/></a> : null
            }
            {
              data.linkedin ? 
              <a href={data.linkedin} target="blank"><img src={linkedin}  alt="linkedin"/></a> : null
            }
            {
              data.instagram ? 
              <a  href={data.instagram} target="blank"><img src={instagram} alt="instagram"/></a> : null
            }
          </div>
        </div>
        <hr/>
        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by {data.companyName} </p>
      </footer>
    </div>
  );
}

export default App;
