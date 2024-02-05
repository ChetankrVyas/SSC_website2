import React from "react";
import coun from "../images/counselor.jpg";
import tstyle from "./Teams.module.css";

import divya from "../images/divya.jpg";
import abhi from "../images/abhishek.png";
import amit from "../images/amit.jpg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
const Team = () => {
  const team = [
    {
      name: "Divya Tiwari",
      img: divya,
      post: "Joint Secretary",
      instaLink: "https://instagram.com/0903_divya?igshid=MzMyNGUyNmU2YQ==",
      mailLink: "mailto:divya.tiwari.bce21@iitbhu.ac.in",
      linkdinLink: "https://www.linkedin.com/in/divya-tiwari-8a6195225",
    },
    {
      name: "Abhishek Anand",
      img: abhi,
      post: "General Secretary",
      instaLink:
        "https://instagram.com/abhishekanand1245?igshid=OGQ5ZDc2ODk2ZA==",
      mailLink: "mailto:abhianand44444@gmail.com",
      linkdinLink:
        "https://www.linkedin.com/in/abhishek-anand08?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Amit Roy",
      img: amit,
      post: "Joint Secretary",
      instaLink: "https://instagram.com/amitroy03_?igshid=OGQ5ZDc2ODk2ZA==",
      mailLink: "mailto:amit.roy.che21@itbhu.ac.in",
      linkdinLink: "https://www.linkedin.com/in/amit-roy--",
    },
  ];
  return (
    <div>

      <div className={tstyle.home_container} style={{ marginBottom: '25rem' }}>

        <div style={{ marginTop: '15rem' }} >
          <svg >
            <text className={tstyle.svgtext} x="50%" y="60%" text-anchor="middle"  >
              Our Team
            </text>
          </svg>
        </div>

        <div className={tstyle.blockquote_wrapper}>
          < div className={tstyle.blockquote}>
            <h2>
            Not all of us can do <span style={{ color: 'black' }}>great things,</span> but we can do small things with <span style={{ color: 'black' }}> great love.</span>
            </h2>
            <h4>&mdash;Mother Teresa<br /></h4>
          </div>
        </div>


        <div className={tstyle.row} >
          <div className={tstyle.profile_card}>
            <div className={tstyle.img}>
              <img src={coun} alt="..." />
            </div>
            <div className={tstyle.caption}>
              <h3>Dr. Sukhada </h3>
              <p>Counsellor</p>
              <div class={tstyle.homePage_icons}>

                <div class={tstyle.social_icons}>
                  <a href="sukhada.hss@iitbhu.ac.in">
                    <AiFillMail />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className={tstyle.row} >
          {team.map((member, index) => (
            <div className={tstyle.profile_card} key={index}>
              <div className={tstyle.img}>
                <img src={member.img} alt="..." />
              </div>
              <div className={tstyle.caption}>
                <h3>{member.name}</h3>
                <p>{member.post}</p>
                <div class={tstyle.homePage_icons}>
                  <div class={tstyle.social_icons}>
                    <a href={member.instaLink}>
                      <AiFillInstagram />
                    </a>
                  </div>
                  <div class={tstyle.social_icons}>
                    <a href={member.mailLink}>
                      <AiFillMail />
                    </a>
                  </div>
                  <div class={tstyle.social_icons}>
                    <a href={member.linkdinLink}>
                      <AiFillLinkedin />
                    </a>
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

export default Team;
