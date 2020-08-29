import React from "react";
import "./App.css";
import Script from "react-load-script";

function App() {
  return (
    <div className="App">
      <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src="https://i.ibb.co/5RXB7Fq/download.png" />
            DSC KLEF
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#we-foucus-on">
                  WE FOCUS ON
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#events">
                  EVENTS WE CONDUCT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  WE WORK FOR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#team">
                  WHO WE ARE
                </a>
              </li>
              {/* <!-----<li class="nav-item">
              <a class="nav-link " href="#">GALLERY</a>
            </li>-------> */}
              <li className="nav-item">
                <a className="nav-link " href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      {/* {We focus on} */}
      <section id="we-foucus-on">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>We focus on</h2>
              <div className="focus-content">
                KLEF Developers Students Club train thousands of student
                developers.DSC is a Google Developers program for unversity
                students to learn mobile and app development skills.The club
                will be open to any student, ranging from novice developers who
                are just starting,to advanced developers who want to further
                their skills.
              </div>
              {/* <!---  <button type="button" class="btn btm-primary">Read more>></button>  ----> */}
            </div>

            <div className="col-md-6 skills-bar">
              <p>Android Development</p>
              <div className="progress">
                <div className="progress-bar">90%</div>
              </div>
              <p>Web Development</p>
              <div className="progress">
                <div className="progress-bar">90%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {why dsc} */}
      <section id="why-dsc">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="icon1">
                <i className="fa fa-rocket"></i>
              </div>
              <h5>Concept of DSC</h5>
              <p>
                The DSC program is a grassroots channel through which Google
                provides development skills, mobile and web development skills
                for students, towards employability.{" "}
              </p>
            </div>
            <div className="col-md-3">
              <div className="icon1">
                <i className="fa fa-lightbulb-o"></i>
              </div>
              <h5>Why DSC?</h5>
              <p>
                For students to learn development skills, solve problems through
                technology and inspire them to be world class developers and
                changemakers.{" "}
              </p>
            </div>
            <div className="col-md-3">
              <div className="icon1">
                <i className="fa fa-users"></i>
              </div>
              <h5>Target audience</h5>
              <p>
                DSC activities are targeted at University students and any
                others including faculty members who want to learn development
                skills & work to solve real-life problems.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h1>What do you want to learn?</h1>
          <div className="row services">
            <div className="col-md-3 text-center">
              <div className="icon">
                <i className="fa fa-android"></i>
              </div>
              <h3>Android Development</h3>
              <p>
                We have a range of courses to teach you Android Development from
                getting started to optimizing app performance.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">
                <i className="fa fa-desktop"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                We have a range of courses to teach you Android Development from
                getting started to optimizing app performance.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">
                <i className="fa fa-cloud"></i>
              </div>
              <h3>Fire base</h3>
              <p>
                We have a range of courses to teach you Android Development from
                getting started to optimizing app performance.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">
                <i className="fa fa-user-circle-o"></i>
              </div>
              <h3>Ethical Hacking</h3>
              <p>
                We have a range of courses to teach you Android Development from
                getting started to optimizing app performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fact */}
      <section id="promo">
        <div class="container">
          <h3>
            83% of the DSC Leads in India shared that they acquired a job or
            internship due to their experience in DSC*
          </h3>
          <p>*Based on DSC India exit survey 2017-2018</p>
        </div>
      </section>
      {/* Team */}
      <section id="team">
        <div className="container">
          <h1>OUR TEAM</h1>
          <div className="row">
            <div className="col-md-3 profile-pic text-center">
              <div className="img-box">
                <img
                  src="https://i.ibb.co/VwDdfzj/SAI-TARUN-PALAKULA.jpg"
                  className="img-responsive"
                />
                <ul>
                  <a href="#">
                    <li>
                      <i className="fa fa-facebook"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-twitter"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-linkedin"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <h2>Sai Tarun</h2>
              {/* <h3>Broadcasting Core</h3>
              <p>Member of Developers Student Club</p> */}
            </div>
            <div className="col-md-3 profile-pic text-center">
              <div className="img-box">
                <img
                  src="https://i.ibb.co/M18d0dc/Whats-App-Image-2020-08-08-at-6-49-15-PM.jpg"
                  className="img-responsive"
                />
                <ul>
                  <a href="#">
                    <li>
                      <i className="fa fa-facebook"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-twitter"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-linkedin"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <h2>Hemanth Bandla</h2>
              {/* <h3>Broadcasting Core</h3>
              <p>Member of Developers Student Club</p> */}
            </div>
            <div className="col-md-3 profile-pic text-center">
              <div className="img-box">
                <img
                  src="https://i.ibb.co/L8FFwvd/Whats-App-Image-2020-08-08-at-6-58-32-PM.jpg"
                  className="img-responsive"
                />
                <ul>
                  <a href="#">
                    <li>
                      <i className="fa fa-facebook"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-twitter"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-linkedin"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <h2>VVS Vishal</h2>
              {/* <h3>Broadcasting Core</h3>
              <p>Member of Developers Student Club</p> */}
            </div>
            <div className="col-md-3 profile-pic text-center">
              <div className="img-box">
                <img
                  src="https://i.ibb.co/9ry0BCf/Whats-App-Image-2020-08-08-at-6-55-41-PM.jpg"
                  className="img-responsive"
                />
                <ul>
                  <a href="#">
                    <li>
                      <i className="fa fa-facebook"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-twitter"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-linkedin"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <h2>Sampath Kumar</h2>
              {/* <h3>Broadcasting Core</h3>
              <p>Member of Developers Student Club</p> */}
            </div>
            <div className="col-md-3 profile-pic text-center">
              <div className="img-box">
                <img
                  src="https://i.ibb.co/9gZTMXB/sunilvurandur.jpg"
                  className="img-responsive"
                />
                <ul>
                  <a href="#">
                    <li>
                      <i className="fa fa-facebook"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-twitter"></i>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <i className="fa fa-linkedin"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <h2>Sunil</h2>
              {/* <h3>Broadcasting Core</h3>
              <p>Member of Developers Student Club</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events">
        <div className="container">
          <h1>Events We Conduct</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="single-event">
                <div className="event-head">
                  <h2>Featured</h2>
                  <h3>Designing with DSC and UIF</h3>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <i className="fa fa-bell"></i>Date: August 8
                    </li>
                    <li>
                      <i className="fa fa-bell"></i>Venue: Youtube
                    </li>
                    <li>
                      <i className="fa fa-bell"></i>Time: 6:00 PM - 7:30 PM
                    </li>
                    <li>
                      <i className="fa fa-bell"></i>Designing & Introduction to
                      Google Codelabs
                    </li>
                    <li>
                      <i className="fa fa-bell"></i>Featuring: Team DSC and Team
                      UIF
                    </li>
                  </ul>
                </div>
                <div className="rsvp-button">
                  <a
                    className="register-btn"
                    href="https://bit.ly/designingwebinar"
                    target="_blank"
                  >
                    REGISTER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="certification">
        <div className="container">
          <h1>Associate Android Developer Certification</h1>
          <p className="text-center">
            Dive deeper with Google Developers Certification for Android
            developers.
          </p>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="profile">
                <img
                  src="https://i.ibb.co/7jjMyVQ/certificate-logo.png"
                  className="user"
                />
                <blockquote>
                  The Associate Android Developer Exam demonstrates the type of
                  skill that an entry-level Android Developer should have as
                  they begin their career.<br></br> By passing this performance
                  based exam and earning the Associate Android Developer
                  Certification,you prove that you're competent and skilled in
                  tasks that a developer typically performs.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h1>Contact Us!</h1>
          <div className="row">
            <div className="col-md-6">
              <form
                className="contact-form"
                method="POST"
                action="contact_form.php"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="yourname"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email id"
                    name="youremail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="yournumber"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    name="yourmessage"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  SEND MESSAGE
                </button>
              </form>
            </div>
            <div className="col-md-6 contact-info">
              <div className="follow">
                <b>Address:</b>
                <i class="fa fa-map-marker"></i>
                KLUniversity,Green Fields,Guntur-522007
              </div>
              <div className="follow">
                <b>Phone:</b>
                <i class="fa fa-phone"></i>
                1234567890/0987654321
              </div>
              <div className="follow">
                <b>Email:</b>
                <i class="fa fa-envelope-o"></i>
                qwertyuiop@gmail.com
              </div>
              <div className="follow">
                <label>
                  <b>Get Social:</b>
                </label>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/dsc_klef/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="container text-center">
          <p>DSC KLEF</p>
        </div>
        <img
          className="qrcode"
          src="https://i.ibb.co/HKcJHjx/Whats-App-Image-2020-08-08-at-18-41-20.jpg"
          alt=""
        />
      </section>
    </div>
  );
}

export default App;
