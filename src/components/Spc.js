import React from "react";
import styles from "./spc.module.css";
import spc from "../images/spc.jpg";
import spc3 from "../images/spc3.jpg";
import spc1 from "../images/spc1.jpg";
import spc2 from "../images/spc2.jpg";
import ayush from "../images/Ayush.png";
import kapil from "../images/kapil.jpg";
import mith from "../images/mithilesh.jpg";
import abhi from "../images/Abhi.jpg"
import sic from "../images/SIC.jpeg"
import bss from "../images/BSS-removebg-preview.png"
import Type from "./Typespc";
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'; 
import { AiFillInstagram, AiFillLinkedin, AiFillMail} from "react-icons/ai";


const Club = () => {
  const handleJoinClick = () => {
    // Replace 'YOUR_WHATSAPP_GROUP_LINK' with your actual WhatsApp group link
    window.location.href = 'https://chat.whatsapp.com/DVChQ1r0P70AbOzvFrGWDg';
  };
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getspcupdates", {
      method: "GET",
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Data");
        setUpdates(data.data);
      })
      .catch(error => {
        console.error('Error fetching updates: ', error);
      });
  }, []);

  const team = [
    { name: "Ayush Sarangi", img: ayush, post: "Joint Secretary", instaLink:'',mailLink:'mailto:ayush.sarangi.civ21@itbhu.ac.in',linkdinLink:'http://www.linkedin.com/in/ayush-sarangi-533861223'},
    { name: "Mithilesh", img: mith, post: "General  Secretary",instaLink:'https://instagram.com/sky_walker_7_10?igshid=OGQ5ZDc2ODk2ZA==',mailLink:'mailto:k.mithilesh.civ21@itbhu.ac.in',linkdinLink:'https://www.linkedin.com/in/mithilesh-k247101823?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: "Kapil", img: kapil, post: "Joint Secretary",instaLink:'https://instagram.com/_kapil_2_2?igshid=ZDdkNTZiNTM=',mailLink:'mailto:kapil.rahangdale.che21@itbhu.ac.in',linkdinLink:'https://www.linkedin.com/in/kapil-rahangdale-637b3822a' },
  ];
  const events=[
    { name: "Abhipraya", img:abhi , text1: "Abhipraya is the annual freshers competition to introduce the club to the freshers. It consists of a series of events to showcase and provide a glimpse of work at the Social Projects Club like Case Studies, designing,treasure hunt ,etc.",text2:"Every year the event is organized in the first semester to bring out the best ideas and innovation to transform society."},
    { name: "Brain Storming session", img: bss,text1:" The Brain Storming Session of SPC is the session in which new social issues are addressed, and critically the solutions presented by the students are analyzed.",text2:"Social Projects Club always welcomes new ideas and tries its best to implement them at ground level. The session is held biyearly where at least everybody in the institute invited, where people pitch their social project ideas, brainstorm with attendees,and team up with interested people,to make progress in the project"},
    {name : "Social Innovation Challenge", img : sic, text1:"In this event, teams were to present their idea work, which would serve as a policybased or technical solution to social problems provided by NGOs.",text2:"The best team was evaluated based on the impact, pragmatism, progress, scalability,"},

  ];
  return (
    <div className={styles.bodies}>
      <div className={`${styles.carousel_container}`}>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" >
              <img src={spc1} class={styles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={spc2} class={styles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={spc3} class={styles.carousel_img} alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      

     
      <div className={styles.club_header}>
        <h2 className={styles.club_name}> Social Projects Club</h2>
        <div className={styles.type}>
                {" "}<Type />{" "}
              </div>
      </div>
       
        {/* about container */}
      <div className={`${styles.about} ${styles.container}`}>
        <img  src={spc} alt="" />
        <div className={styles.aboutContent}>
          <h3>About Us</h3>
          <p className={styles.dis}>
            Social Projects’ Club aka SPC, is a team of visionary youth working
            under the guidance of the Social service council of IIT (BHU),
            Varanasi on various issues of public interest. We identify problems
            which affect our society and incorporate our technical skills in
            addition to proper planning and strategy to come up with innovative
            solutions. We as a team have taken the challenge of empowering
            society by employing simple and effective methods.
          </p>
          <button onClick={handleJoinClick} className={`${styles.btn} ${styles.btnSecondary}` }>
            Join Us
          </button>
        </div>
      </div>

        {/* updates and  */}
      {/* <div className={styles.heading}> Updates Section</div>
      <div>
      <Carousel>
        {updates.map(update => (
          <Carousel.Item >
            <Carousel.Caption>
              <h3>{update.title}</h3>
              <p>{update.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div> */}

        {/* Event Container */}
      <div className={styles.eventsBack}></div>
      <div className={`${styles.events} ${styles.container}`}>
        <h2> Events & Activities</h2>
        
         {events.map((event,index)=>(
          
        <div className={styles.event}>
        <div className={styles.eventContent}>
          <h3>{event.name}</h3>
          <p>
           {event.text1}
          </p>
          
          <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
        </div>
        <img className={styles.img_ani} src={event.img} alt="" />
        <div className={styles.date}></div>
      </div>
         ))}

      </div>
      

      
        {/* team container */}
      <div className={styles.home_container}>
        <h1 className={styles.heading}> Meet Our Team </h1>

        <div className={styles.row}>
            {team.map((member, index) => (
                     <div className={styles.profile_card} key={index}>
                     <div className={styles.img}>
                         <img src={member.img} alt='...'/>
                     </div>
                     <div className={styles.caption}>
                         <h3>{member.name}</h3>
                         <p>{member.post}</p>
                         <div class={styles.homePage_icons}>
                           <div class={styles.social_icons}>
                             <a href={member.instaLink}><AiFillInstagram/></a>
                           </div>
                           <div class={styles.social_icons}>
                             <a href={member.mailLink}><AiFillMail/></a>
                           </div>
                           <div class={styles.social_icons}>
                             <a href={member.linkdinLink}><AiFillLinkedin/></a>
                           </div>
                        </div>
                     </div>
                    </div>
            ))}
          

        
           </div>
     
      </div>

    </div>
  );
};

export default Club;
