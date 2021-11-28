import Head from "next/head"
// import Image from "next/image"
// import "../styles/Login.css"
// import "../public/style/login.css"
// import { Navbar } from "../components/Navbar/Navbar"
import Script from "next/script"
import styled from "@emotion/styled"
import Link from 'next/link'

const LoginDiv = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito", sans-serif;
    overflow: hidden;
  }

  .wave {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: 0 2rem;
    margin-top: -3em;
    margin-left: 300px;
  }

  @media screen and (max-width: 1200px) {
    .container {
      margin-left: 150px;
    }
  }

  @media screen and (max-width: 900px) {
    .container {
      margin-left: 0px;
    }
  }

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .login-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  .img img {
    width: 500px;
    display: none;
  }

  form {
    width: 360px;
  }

  .login-content img {
    height: 100px;
  }

  .login-content h2 {
    margin: 15px 0;
    color: #ed443b;
    /* text-transform: uppercase; */
    font-size: 2.9rem;
    font-weight: 800;
  }

  .login-content .input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
  }

  .login-content .input-div.one {
    margin-top: 0;
  }

  .i {
    color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .i i {
    transition: 0.3s;
  }

  .input-div > div {
    position: relative;
    height: 45px;
  }

  .input-div > div > h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: 0.3s;
  }

  .input-div:before,
  .input-div:after {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #ed443b;
    transition: 0.4s;
  }

  .input-div:before {
    right: 50%;
  }

  .input-div:after {
    left: 50%;
  }

  .input-div.focus:before,
  .input-div.focus:after {
    width: 50%;
  }

  .input-div.focus > div > h5 {
    top: -10px;
    font-size: 10px;
  }

  .input-div.focus > .i > i {
    color: #ed443b;
  }

  .input-div > div > input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    color: #555;
    font-family: "Nunito", sans-serif;
  }

  .input-div.pass {
    margin-bottom: 4px;
  }

  a {
    display: block;
    text-align: right;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: 0.3s;
  }

  a:hover {
    color: #ed443b;
  }

  .btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #ed443b, #ff5a51, #ed443b);
    background-size: 200%;
    font-size: 1.2rem;
    color: #fff;
    font-family: "Nunito", sans-serif;
    text-transform: uppercase;
    margin: 2rem 0;
    cursor: pointer;
    transition: 0.5s;
    font-family: "Nunito", sans-serif;
    font-weight: 500;
  }
  .btn:hover {
    background-position: right;
  }

  @media screen and (max-width: 1050px) {
    .container {
      grid-gap: 5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    form {
      width: 290px;
    }

    .login-content h2 {
      font-size: 2.4rem;
      margin: 8px 0;
    }

    .img img {
      width: 400px;
    }
  }

  @media screen and (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
    }

    .img {
      display: none;
    }

    .wave {
      display: none;
    }

    .login-content {
      justify-content: center;
    }
  }
`

export default function Home() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/a81368914c.js"
        strategy="beforeInteractive"
      />
      {/* <Script strategy="beforeInteractive">
        {`
          const inputs = document.querySelectorAll(".input");

          function addcl(){
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
          }
          
          function remcl(){
            let parent = this.parentNode.parentNode;
            if(this.value == ""){
              parent.classList.remove("focus");
            }
          }
          
          
          inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
          });
          
        `}
      </Script> */}
      <Head>
        <title>Home - SIPANCO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginDiv>
        <img className="wave" src="/images/Landing/sapi.svg" alt="" />
        <div className="container">
          <div className="img">
            <img src="/images/Landing/virus.svg" alt="" />
          </div>

          <div className="login-content">
            <form action="" method="POST">
              <img src="/images/Landing/avatar.svg" alt="" />
              <h2 className="title" data-aos="fade-up">Login</h2>
              <div className="input-div one" data-aos="fade-up" data-aos-delay="300">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  {/* <h5>Username</h5> */}
                  <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="input-div pass" data-aos="fade-up" data-aos-delay="600">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  {/* <h5>Password</h5> */}
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              {/* {% if success %} */}
              {/* <div className="alert alert-success" role="alert">
                Login berhasil
              </div> */}
              {/* <!-- <p style="color: green;">Login berhasil</p> --> */}
              {/* {% endif %} */}
              {/* {% if failed %} */}
              {/* <div className="alert alert-danger" role="alert">
                Username/Password salah. Silahkan coba lagi
              </div> */}
              {/* <!-- <p style="color: red;">Username/Password salah. Silahkan coba lagi</p> --> */}
              {/* {% endif %} */}
              <Link href="/register">
                <a>
                  Dont have an account ? Register here !
                </a>
              </Link>
              <input type="submit" className="btn" value="Login" data-aos="fade-up" data-aos-delay="900"/>
            </form>
          </div>
        </div>
      </LoginDiv>
    </>
  )
}
