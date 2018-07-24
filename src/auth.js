import React , { Component } from 'react';
import './auth.css';
var firebase  = require("firebase");


var config = {

apiKey: "AIzaSyBUUaByENtH-QWL3w1AIW1rcjXeQo4_aXE",

authDomain: "filmy-profiles.firebaseapp.com",

databaseURL: "https://filmy-profiles.firebaseio.com",

projectId: "filmy-profiles",

storageBucket: "filmy-profiles.appspot.com",

messagingSenderId: "82052180042"

};

firebase.initializeApp(config);
class Auth extends Component{
  render(){
    return(
      <div>
          <div className='navBorder'>
            <nav className="navbar navbar-expand-lg">

                <div className='logomob'>
                  <a className="navbar-brand " href="#"><img src='./images/logo.PNG' id='upperNavLogo' alt='logo' /></a>

                </div>
                  <div className="collapse navbar-collapse d-none d-lg-inline" id="navbarSupportedContent">
                    <div className="form-inline my-2 my-lg-0 ml-auto navForm" >
                      <input className="form-control d-none d-lg-inline " ref='email' id='email' type="email" placeholder="Username" aria-label="Search" required/>
                      <input className="form-control  d-none d-lg-inline" ref = 'password' id='pass'  type="password" placeholder="Password" aria-label="Search" required/>


                      <button className="btn btn-primary  d-none d-lg-inline " id='login' type="submit" onClick={this.login}>Login</button>
                      <button className="btn btn-primary hide " id='logout' type="submit"  onClick={this.logout}>Logout</button>

                    </div>
                  </div>

              </nav>

          </div>
          <div className='row d-none d-lg-flex'>
    <div className=' col-lg-8 '>
      <div className="relativeImg">
      <img src='./images/image_main.png' className="imgMain img-responsive mr-auto" alt='road-scene' />
      <p className='absolute-text'><strong>LOREM IPSUM TEXT <br />GOES HERE....</strong></p>
      <p className='text2'><strong>This is sub tagline</strong> </p>
        <div className="ml-0 mr-0 row align-items-end user1">
        <div className="col grid1">
    <strong>  USER 1</strong>
        </div>
        <div className="col grid2">
          <strong> USER 2  </strong>
        </div>
        <div className="col grid3">
          <strong> USER 3  </strong>
        </div>
      </div>
      </div>
      <div>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="./images/p1.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">card title</h5>


            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="./images/p2.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">card title</h5>


            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="./images/p3.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">card title</h5>


            </div>
          </div>
        </div>



      </div>

    </div>
    <div className =' col-lg-4'>
           <div id='head'>
             <h3 id="number"><strong>Number of Users</strong></h3>
             <p className='pnumber'><strong>172,286</strong> <span id="many"> and many more .....</span></p>
           </div>
           <div id='box'>
           <div>
            <h2 id='join'><strong>JOIN US</strong></h2>
            </div>
            <div>
              <button onClick={this.facebook} id="google" className="facebook btn btn-primary">Facebook</button>

            </div>

            <div>
             <button onClick={this.google} id="google" className="google btn btn-primary ">Google</button>

       </div>
       <div id="ormargin">
       <div className='or1'>
        <span className='or'>OR </span>
       </div>
     </div>
       <div className='form'>


           <div id='inputfeild'>
         <div className="form-group">

           <input type="email" ref='email' className="form-control"  aria-describedby="emailHelp" id='username' placeholder="Username" required/>

         </div>
         <div className="form-group">

           <input type="password" ref='password' className="form-control" id="signpass" placeholder="Password" required/>
         </div>
         <div className="form-group">

           <input type="tel" ref='mobile' className="form-control" id="mobnumb" placeholder="Mobile No" required/>
         </div>
         <button type="submit" id='submit' className="btn btn-primary" onClick={this.signup}>Submit</button>
       </div>
       </div>

         </div>
    <div className='offer spclhide'>
      <p id='special'><strong>SPECIAL OFFER</strong></p>
    </div>
       </div>
      </div>

      <div id='mobileBox' className='d-lg-none'>
<div className='form'>


    <div>
      <div>
        <h3 id="ipsum">Lorem Ipsum Dolor Sit <br /> <span id='amit'>Amit Si</span></h3>
      </div>
  <div className="form-group">

    <input className="form-control " ref='email' id='email1' type="email" placeholder="Username" aria-label="Search" required/>


  </div>
  <div className="form-group">

  <input className="form-control " ref = 'password' id='pass1'  type="password" placeholder="Password" aria-label="Search" required />
  </div>
<div>
  <button className="btn btn-primary btn-lg" id='login' type="submit" onClick={this.login}><strong>Login</strong></button>
    <button className="btn btn-primary btn-lg hide" id='logout' type="submit"  onClick={this.logout}><strong>LogOut</strong></button>
</div>
</div>

</div>
<div>
 <p id='dont'>Don't Have an Account?<a href="#" id='slink' className='text-primary'> Sign Up Here</a></p>
</div>
<div id="orcenter">
<div className='or1 container'>
 <span className='or '>OR </span>
</div>
</div>
<div>
  <button onClick={this.facebook} id="google" className="facebook btn btn-primary">Facebook</button>

</div>

<div>
 <button onClick={this.google} id="google" className="google btn btn-primary ">Google</button>

</div>
</div>

      <hr className='hrline' size='30'/>

      <footer  className=" footer page-footer my-theme-bg-blue center-on-small-only nopadding ">
    <div className='row'>


    <div className='col-2 col-lg-4  btmfooter' >
     <img src='./images/bottom.PNG' className='img-responsive d-none d-lg-block' alt='bottom logo' />
     <img src='./images/logo_phone.png' className='d-md-block d-lg-none' id ='fimage' alt='bottom logo' />
    </div>
    <div className='col-10 col-lg-8'>
      <div id="foot">
     <span id='footertext'>FAQs</span>
     <span id='footertext'>About Us</span>
     <span id='footertext'>Contact Us</span>
     <span id='footertext'>Terms</span>
     </div>
    </div>
      </div>
  </footer>
  </div>

    )
  }
}
export default Auth;
