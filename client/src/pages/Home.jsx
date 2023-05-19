import React, { useState } from 'react'
import { useEffect } from "react";
import { getAllPersons } from "../api/requests";
import mainstyle from "./home.module.css"
import img1 from "../image/img1.png"
import img2 from "../image/img2.png"
import img3 from "../image/img3.png"
import img4 from "../image/img4.png"
import Vektor0 from "../image/Vector0.png"
import Vektor1 from "../image/Vector1.png"
import Vektor2 from "../image/Vector2.png"
import Vektor3 from "../image/Vector3.png"
import Vektor4 from "../image/Vektor4.png"
import Vektor5 from "../image/Vektor5.png"
import User1 from "../image/user1.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Col, Row } from 'antd';
import { usePersonContext } from "../context/PersonContext";

const Home = () => {
  const[persons,setPersons] = useState();
  useEffect(() => {
    getAllPersons().then((res) => {
      setPersons(res);
    });
  },[])
  return (
    <main>
      <section className={mainstyle.section1}>
        <div className={mainstyle.divSection1}>
          <div className={mainstyle.topDiv}>
            <p>Courses</p>
            <h1>Video in Live Action</h1>
            <h6>Problems trying to resolve the conflict between <br></br> the two major realms of Classical physics: Newtonian mechanics </h6>
          </div>
          <div className={mainstyle.bottomDiv}>
            <div className={mainstyle.divCol}>
              <div>

                <div className={mainstyle.positindiv}>
                  <img src={img1} alt="" />
                  <button className={mainstyle.sale}>Sale</button>
                  <div className={mainstyle.icons}>
                    <button><FavoriteIcon /></button>
                    <button><ShoppingBasketIcon /></button>
                    <button><RemoveRedEyeIcon /></button>
                  </div>
                </div>
                <div>
                  <p>2,769 online courses	</p>
                  <button className={mainstyle.smallButton}>4.9</button>
                  <h6>Watch our Courses</h6>
                  <h5>We focus on ergonomics<br></br> and meeting you....</h5>
                  <h4>15 Sales</h4>
                  <span className={mainstyle.span1}>$16.48</span>
                  <span className={mainstyle.span2}>$6.48</span><br></br>
                  <button className={mainstyle.learnMore}>Learn More</button>
                </div>
              </div>
            </div>
            <div className={mainstyle.divCol}>
              <div>
                <div className={mainstyle.positindiv}>
                  <img src={img2} alt="" />
                  <button className={mainstyle.sale}>Sale</button>
                  <div className={mainstyle.icons}>
                    <button><FavoriteIcon /></button>
                    <button><ShoppingBasketIcon /></button>
                    <button><RemoveRedEyeIcon /></button>
                  </div>
                </div>
                <div>
                  <p>2,769 online courses	</p>
                  <button className={mainstyle.smallButton}>4.9</button>
                  <h6>Watch our Courses</h6>
                  <h5>We focus on ergonomics<br></br> and meeting you....</h5>
                  <h4>15 Sales</h4>
                  <span className={mainstyle.span1}>$16.48</span>
                  <span className={mainstyle.span2}>$6.48</span><br></br>
                  <button className={mainstyle.learnMore}>Learn More</button>
                </div>
              </div>
            </div>
            <div className={mainstyle.divCol}>
              <div>
                <div className={mainstyle.positindiv}>
                  <img src={img3} alt="" />
                  <button className={mainstyle.sale}>Sale</button>
                  <div className={mainstyle.icons}>
                    <button><FavoriteIcon /></button>
                    <button><ShoppingBasketIcon /></button>
                    <button><RemoveRedEyeIcon /></button>
                  </div>
                </div>
                <div>
                  <p>2,769 online courses	</p>
                  <button className={mainstyle.smallButton}>4.9</button>
                  <h6>Watch our Courses</h6>
                  <h5>We focus on ergonomics<br></br> and meeting you....</h5>
                  <h4>15 Sales</h4>
                  <span className={mainstyle.span1}>$16.48</span>
                  <span className={mainstyle.span2}>$6.48</span><br></br>
                  <button className={mainstyle.learnMore}>Learn More</button>
                </div>
              </div>
            </div>
            <div className={mainstyle.divCol}>
              <div>
                <div className={mainstyle.positindiv}>
                  <img src={img4} alt="" />
                  <button className={mainstyle.sale}>Sale</button>
                  <div className={mainstyle.icons}>
                    <button><FavoriteIcon /></button>
                    <button><ShoppingBasketIcon /></button>
                    <button><RemoveRedEyeIcon /></button>
                  </div>
                </div>
                <div>
                  <p>2,769 online courses	</p>
                  <button className={mainstyle.smallButton}>4.9</button>
                  <h6>Watch our Courses</h6>
                  <h5>We focus on ergonomics<br></br> and meeting you....</h5>
                  <h4>15 Sales</h4>
                  <span className={mainstyle.span1}>$16.48</span>
                  <span className={mainstyle.span2}>$6.48</span><br></br>
                  <button className={mainstyle.learnMore}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={mainstyle.section2}>
        <div>
          <ul>
            <li><img src={Vektor0} alt="" /></li>
            <li><img src={Vektor1} alt="" /></li>
            <li><img src={Vektor2} alt="" /></li>
            <li><img src={Vektor3} alt="" /></li>
            <li><img src={Vektor4} alt="" /></li>
            <li><img src={Vektor5} alt="" /></li>
          </ul>
        </div>
      </section>
        <section className={mainstyle.section3}>
          <div className={mainstyle.container3}>
            <Row className={mainstyle.row3} gutter={16}>
             {persons && persons.map((person)=>{
               return <Col key={person.id} className="gutter-row" span={6}>
               <div className={mainstyle.imgcol}>
                 <img src={User1} alt="" />
                 <h1>{person.name}</h1>
                 <p>{person.surname}</p>
                 <div className={mainstyle.icons3}>

                   <FacebookIcon style={{color:"#FF6551"}}/>
                   <InstagramIcon style={{color:"#FF6551"}}/>
                   <TwitterIcon style={{color:"#FF6551"}}/>
                 </div>
               </div>
             </Col>
             })}
              
              
            </Row>
          </div>

        </section>
    </main>
  )
}

export default Home