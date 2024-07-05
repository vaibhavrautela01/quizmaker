import React, { useState } from 'react';
import './plans.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-scroll'; 
import Search from '../assets/search.png'
import Teacher from '../assets/teacher.jpeg'
import R from '../assets/r.jpg'
import Help from '../assets/help.jpg'


function Plans() {

  
  return (
    <>
      <Header />
      <div className='search'>

      <input type='search' placeholder='Search your plan..' id='f' ></input>

      
      <input type='submit' id="searchbtn" />
      <img src={Search} className='img'></img> 
      


      </div>
      <br/><br/>




      <div className='tot'>

      <div className='discount'><h1>Your big idea<br/> deserves a great<br/> Teacher.
      </h1>
      
      <p>A memorable Learning establishes credibility as the<br/> primary connection between you and the<br/> smartness.</p>

      <input type='submit' value="Read More" className="readmore"></input>
      
      </div>

        <img src={Teacher} className='Teacher'>
        </img>

        <div className='text'>
          <h4>Special Discount<br/></h4>

          <h3>be the first one to get discount</h3>
          
          <h1>JUST AT ₹ 1599.00/mo</h1>


          <input type='submit' value="Learn More"></input>

          <h5>Access to 100+ Courses</h5>

          <h5>Weekly Quizzes</h5>

          <h5>Certification of Completion</h5>

          <h5>Career Counseling</h5>

          <h5>Interview Preparation</h5>

          <h5>Priority Support</h5>

          <h5>Access to 100+ Courses</h5>

      
          
          </div>
      </div><br/><br/>

      <center>

        
        <h1 className="head">Summer Offer… save up to 67%.
        Hurry, offer ends soon.</h1>

        <h1 id='heading'>What's first up for your better learning?</h1>
        <div className='total'>

       




          <div className='a'>
            <h1 className='head'>Silver</h1>
            <h3>Basic learning plan</h3>
            <h3>₹ 499.00/mo</h3>

            <Link to="/Silver" className='link'>Buy Now</Link>

            <h3>Plan Renews at ₹599.00/month</h3>

            <div className='para'>


              <p>Access to 10 Courses</p>
              <p>Weekly Quizzes</p>
              <p>Monthly Assignments</p>
              <p>1:1 Mentor Support</p>
              <p>Community Access</p>
              <p>Certification of Completion</p>



            </div>
          </div>










          <div className='b'>
            <h1 className='head'>Gold</h1>
            <h3>Standard learning plan</h3>
            <h3>₹ 999.00/mo</h3>

            <Link to="/Gold" className='link'>Buy Now</Link>


            <h3>Plan Renews at ₹1199.00/month</h3>

            

            <div className='para'>


              <p>Access to 50 Courses</p>
              <p>Weekly Quizzes</p>
              <p>Monthly Assignments</p>
              <p>1:1 Mentor Support</p>
              <p>Community Access</p>
              <p>Certification of Completion</p>
              <p>Career Counseling</p>




            </div>
          </div>









          <div className='d'>
            <h1 className='head'>Platinum</h1>
            <h3>Premium learning plan</h3>
            <h3>₹ 1999.00/mo</h3>

            <Link to="/Platinum" className='link'>Buy Now</Link>


            <h3>Plan Renews at ₹2399.00/month</h3>


            <div className='para'>


              <p>Access to 100+ Courses</p>
              <p>Weekly Quizzes</p>
              <p>Monthly Assignments</p>
              <p>1:1 Mentor Support</p>
              <p>Community Access</p>
              <p>Certification of Completion</p>
              <p>Career Counseling</p>
              <p>Interview Preparation</p>
              <p>Priority Support</p>


            </div>
          </div>
        </div>

        </center>
      <div className='aboutus'>

      <center><h1 className='head' >ABOUT US?</h1></center>

      <div className='z'>

      <div><img src={R} alt="hello" id='l' /></div>

    

      <div className='q'>
      <h1 className='q1'>Hi Vaibhav Rautela THIS SIDE!</h1>
      <p>
        To work in a firm with a professional work driven environment where I can utilize and apply my knowledge, skills which would enable me as a fresh graduate to grow while fulfilling organizational goals. I am a keen learner, passionate about technology and like to learn new things. A team player who will lead or take direction well. An optimistic person who believes that life is one journey so you should be open to everything. In my opinion, every day is an opportunity to learn something new

     <h2> Personal Introduction</h2>
      "My name is Vaibhav Rautela, and I am a Student with a passion for Leaning. With a background in Computer Science, I have dedicated my career to my family member who has always been a great support to me."

    <h2>Professional Achievements</h2>
      "Throughout my career, I have accomplished several milestones. These experiences have honed my skills in Programming, enabling me to learn and master new things."

    <h2>Goals and Aspirations</h2>
      "Looking ahead, I aspire to become a good programmer. I am particularly interested in Software development, where I believe I can make a significant impact with my skills."

    <h2>Personal Interests</h2>
      "Beyond my professional life, I enjoy playing outdoor games. Whether it's football or cricket, these activities help me stay balanced and inspired. I also love to read books, which allows me to connect with others and continuously learn new things."

    <h2>Closing</h2>
      "In summary, I am a dedicated and passionate individual who is always striving for excellence in both my professional and personal life. I look forward to the opportunities and challenges that lie ahead, and I am excited to continue my journey of growth and success."
      
      </p>
      
      </div>


      </div>
      </div>





       <center> <h1 className='head'>Contact Us?</h1></center>
      <div className='contact'>


        <img src={Help} className='help'></img>

        <div className='contactus'><h4>Why go with Smart-Teaching?</h4>
       <div className='h6'><h6> Because we offer expert support,<br/> plus a lot more.<br/>
        
        <input type='submit' value="Contact Us? " className="readmore"></input></h6></div>
        
        </div>

        

      </div>





      <center> <h1 className='head'>Feedback</h1></center>
      <div className='feedback' id="feedback-section">

        <div className='msg'>YOUR FEEDBACK MATTERS!<br/></div>

        <div className='input'>
        Enter Your Name:<input type='text' className='box'></input><br/>
        How Can We Improve Your Service:<input type='text' className='box1'></input><br/>
        <input type='submit' className='btn'></input></div>

      </div>

     



      <Footer />
    </>
  );
}

export default Plans;
