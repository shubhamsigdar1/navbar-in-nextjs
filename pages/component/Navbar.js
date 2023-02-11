import React, { useState } from 'react'
import Image from 'next/image';
// import HOCNavbar from './HOCNavbar';
import styles from './navbar.module.scss';

const Navbar = () => {
  const GITHUB_LOGO = "/icons/github.png"
  const [toggle, setToggle] = useState(false);
  const sidebarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='font-bold text-base font-sans sticky z-1 top-0'> //wrapper
      <>
        <nav className={styles.navBar}>
          <div className='hidden' onClick={sidebarToggle}>//hamburger
            <span className='block w-6 h-1 my-1.25 mx-auto'></span>//bar
            <span className='block w-6 h-1 my-1.25 mx-auto'></span>
            <span className='block w-6 h-1 my-1.25 mx-auto'></span>
          </div>
          <div className={styles.navBarLogin}>
            <a
              className={styles.btnLogin}
              href="#"
            >
              <button className={styles.btnLoginText} >
                Sign In
                <Image
                  className={styles.githubLogo}
                  src={GITHUB_LOGO}
                  alt="GitHub Icon"
                  height={15}
                  width={15}
                />
              </button>
            </a>
          </div>
          <ul
            className={`${styles.navBarMenu} ${toggle ? `${styles.active}` : ''
              }`}
          >
            <li className='float-left py-3 px-5'>//navBarLogoLi
              <a className='m-0 block rounded-lg text-white text-center p-0 no-underline' href="https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97">
                <Image
                  src="/images/Real-Dev-Squad@1x.png"
                  alt="home nav logo"
                  height={50}
                  width={50}
                />
              </a>
            </li>
            <li className='float-left hidden'><a href="http://realdevsquad.com/">Home</a></li>//homeTab
            <li className='float-left'><a className='m-2.5 block rounded-lg text-white text-center py-5 px-4 no-underline' href="https://welcome.realdevsquad.com/">Welcome</a></li>
            <li className='float-left'><a className='m-2.5 block rounded-lg text-white text-center py-5 px-4 no-underline' href="https://www.realdevsquad.com/events">Events</a></li>
            <li className='float-left'><a className='m-2.5 block rounded-lg text-white text-center py-5 px-4 no-underline' href="https://members.realdevsquad.com/">Members</a></li>
            <li className='float-left'><a className='m-2.5 block rounded-lg text-white text-center py-5 px-4 no-underline' href="https://crypto.realdevsquad.com/">Crypto</a></li>
            <li className='float-left'><a className='m-2.5 block rounded-lg text-white text-center py-5 px-4 no-underline' href="https://status.realdevsquad.com/">Status</a></li>
            <li className='float-left hidden'>//navBarLoginLi
              <a className='m-5.5 block rounded-lg text-white text-center p-0 no-underline'
                href="https://my.realdevsquad.com/profile"
              >//btnLogin
                <button className='rounded-md p-1 bg-purple-900 text-white cursor-pointer border-2 border-solid border-white flex justify-around'>//btnLoginText
                  Sign In With GitHub
                  <Image
                    className={styles.githubLogo}
                    src="/icons/github.png"
                    alt="GitHub Icon"
                    height={15}
                    width={15}
                  />
                </button>
              </a>
              {/* <div className='hidden text-white m-6 cursor-pointer'>//userGreet
                <div class="styles.userGreetMsg">Hello, User!</div>
                <img class="styles.userProfilePic" />
              </div> */}
            </li>
          </ul>
        </nav>
      </>
    </div>
  )
}

export default Navbar
