import React, { useState } from 'react'
import Image from 'next/image';
// import HOCNavbar from './HOCNavbar';
import styles from './navbar.module.scss';

const Navbar = () => {
  const GITHUB_LOGO = "/icons/github.png"
  const [toggle, setToggle] = useState(false);
  const NavbarMenu1='laptop:list-none laptop:m-0 laptop:p-0 laptop:overflow-hidden laptop:bg-purple-900 bg-white hidden w-full py-2.5 px-0';
  const Active='laptop:text-[#e30464] block'
  const margin='0';
  const sidebarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='font-bold text-base font-sans sticky z-1 top-0'> //wrapper
      <>
        <nav className='bg-[#1d1283]'>//navBar
          <div className="laptop:hidden h-20 w-20 p-4 inline-block cursor-pointer text-xl text-white" onClick={sidebarToggle}>//hamburger
            <span className='block w-6 h-1 my-1.25 mx-auto'></span>//bar
            <span className='block w-6 h-1 my-1.25 mx-auto'></span>
            <span className='block w-6 h-1 my-1.25 mx-auto'></span>
          </div>
          <div className='laptop:hidden h-[73px] w-[73px] p-[18px] inline-block cursor-pointer text-[20px] text-white'>//navBarLogin
            <a
              className={styles.btnLogin}
              href="#"
            >
              <button className={styles.btnLoginText} >
                Sign In
                <Image
                  className="ml-[4px] rounded-[50%] h-[15px] w-[15px]"
                  src={GITHUB_LOGO}
                  alt="GitHub Icon"
                  height={15}
                  width={15}
                />//githubLogo
              </button>
            </a>
          </div>
          <ul
            className={`${NavbarMenu1} ${toggle ? `${Active}` : ''
              }`}
          >
            <li className='float-right py-[12px] px-[20px]'>//navBarLogoLi
              <a className='laptop:m-0 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:p-0 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97">
                <Image
                  src="/images/Real-Dev-Squad@1x.png"
                  alt="home nav logo"
                  height={50}
                  width={50}
                />
              </a>
            </li>
            <li className='laptop:float-left laptop:hidden block'><a className='laptop:m-2.5 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="http://realdevsquad.com/">Home</a></li>//homeTab
            <li className='float-left'><a className='laptop:m-2.5 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="https://welcome.realdevsquad.com/">Welcome</a></li>
            <li className='float-left'><a className='laptop:m-2.5 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="https://www.realdevsquad.com/events">Events</a></li>
            <li className='float-left'><a className='laptop:m-2.5 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="https://members.realdevsquad.com/">Members</a></li>
            <li className='float-left'><a className='laptop:m-2.5 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="https://crypto.realdevsquad.com/">Crypto</a></li>
            <li className='float-left'><a className='laptop:m-2.5 laptop:block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]' href="https://status.realdevsquad.com/">Status</a></li>
            <li className='float-left'>//navBarLoginLi
              <a className='m-5.5 block rounded-lg text-white text-center p-0 no-underline'
                href="https://my.realdevsquad.com/profile"
              >//btnLogin
                <button className='rounded-md p-1 bg-purple-900 text-white cursor-pointer border-2 border-solid border-white flex justify-around'>
                  Sign In With GitHub
                  <Image
                    className="ml-[4px] rounded-[50%] h-[15px] w-[15px]"
                    src="/icons/github.png"
                    alt="GitHub Icon"
                    height={15}
                    width={15}
                  />//githubLogo
                </button>
              </a>
              {/* <div class={styles.userGreet}>
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
