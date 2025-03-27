'use client';
import React from 'react';
import styles from './Footer.module.css';
import NavIcon from './NavIcon';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  // SVG content for each navigation icon
  const homeIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px] text-[#367BA1]"> <path d="M18 44V24H30V44M6 18L24 4L42 18V40C42 41.0609 41.5786 42.0783 40.8284 42.8284C40.0783 43.5786 39.0609 44 38 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V18Z" stroke="#367BA1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

  // const searchIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px] text-[#367BA1]"> <path d="M39.2 42L26.6 29.4C25.6 30.2 24.45 30.8333 23.15 31.3C21.85 31.7667 20.4667 32 19 32C15.3667 32 12.2917 30.7417 9.775 28.225C7.25833 25.7083 6 22.6333 6 19C6 15.3667 7.25833 12.2917 9.775 9.775C12.2917 7.25833 15.3667 6 19 6C22.6333 6 25.7083 7.25833 28.225 9.775C30.7417 12.2917 32 15.3667 32 19C32 20.4667 31.7667 21.85 31.3 23.15C30.8333 24.45 30.2 25.6 29.4 26.6L42 39.2L39.2 42ZM19 28C21.5 28 23.625 27.125 25.375 25.375C27.125 23.625 28 21.5 28 19C28 16.5 27.125 14.375 25.375 12.625C23.625 10.875 21.5 10 19 10C16.5 10 14.375 10.875 12.625 12.625C10.875 14.375 10 16.5 10 19C10 21.5 10.875 23.625 12.625 25.375C14.375 27.125 16.5 28 19 28Z" fill="#367BA1"></path> </svg>`;

  const smileIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px] text-[#367BA1]"> <path d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#367BA1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

  const chartIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px] text-[#367BA1]"> <path d="M24 40V20M36 40V8M12 40V32" stroke="#367BA1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

  const profileIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px]"> <path d="M47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5C36.9787 0.5 47.5 11.0213 47.5 24Z" fill="white" stroke="#367BA1"></path> <path d="M24 24C22.3789 24 20.9912 23.4228 19.8368 22.2684C18.6824 21.114 18.1052 19.7263 18.1052 18.1052C18.1052 16.4842 18.6824 15.0965 19.8368 13.9421C20.9912 12.7877 22.3789 12.2105 24 12.2105C25.621 12.2105 27.0088 12.7877 28.1631 13.9421C29.3175 15.0965 29.8947 16.4842 29.8947 18.1052C29.8947 19.7263 29.3175 21.114 28.1631 22.2684C27.0088 23.4228 25.621 24 24 24ZM12.2105 35.7895V31.6631C12.2105 30.8281 12.4254 30.0605 12.8552 29.3605C13.2851 28.6605 13.8561 28.1263 14.5684 27.7579C16.0912 26.9965 17.6386 26.4254 19.2105 26.0447C20.7824 25.664 22.3789 25.4737 24 25.4737C25.621 25.4737 27.2175 25.664 28.7895 26.0447C30.3614 26.4254 31.9088 26.9965 33.4316 27.7579C34.1438 28.1263 34.7149 28.6605 35.1447 29.3605C35.5745 30.0605 35.7895 30.8281 35.7895 31.6631V35.7895H12.2105ZM15.1579 32.8421H32.8421V31.6631C32.8421 31.393 32.7745 31.1474 32.6395 30.9263C32.5044 30.7052 32.3263 30.5333 32.1052 30.4105C30.7789 29.7474 29.4403 29.25 28.0895 28.9184C26.7386 28.5868 25.3754 28.421 24 28.421C22.6245 28.421 21.2614 28.5868 19.9105 28.9184C18.5596 29.25 17.221 29.7474 15.8947 30.4105C15.6737 30.5333 15.4956 30.7052 15.3605 30.9263C15.2254 31.1474 15.1579 31.393 15.1579 31.6631V32.8421ZM24 21.0526C24.8105 21.0526 25.5044 20.764 26.0816 20.1868C26.6588 19.6096 26.9474 18.9158 26.9474 18.1052C26.9474 17.2947 26.6588 16.6009 26.0816 16.0237C25.5044 15.4465 24.8105 15.1579 24 15.1579C23.1895 15.1579 22.4956 15.4465 21.9184 16.0237C21.3412 16.6009 21.0526 17.2947 21.0526 18.1052C21.0526 18.9158 21.3412 19.6096 21.9184 20.1868C22.4956 20.764 23.1895 21.0526 24 21.0526Z" fill="#367BA1"></path> </svg>`;

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <nav className={styles.navigationBar}>
        <div className={styles.navItems}>
          <NavIcon
            svgContent={homeIcon}
            className={styles.navItem}
            onClick={() => navigate('/home')}
          />
          {/* <NavIcon
            svgContent={searchIcon}
            className={styles.navItem}
            onClick={() => console.log('Search clicked')}
          /> */}
          <NavIcon
            svgContent={smileIcon}
            className={styles.navItem}
            onClick={() => navigate('/mood')}
          />
          <NavIcon
            svgContent={chartIcon}
            className={styles.navItem}
            onClick={() => navigate('/stats')}
          />
          <NavIcon
            svgContent={profileIcon}
            className={styles.profileItem}
            onClick={() => console.log('Profile clicked')}
          />
        </div>
      </nav>
    </div>
  );
};

export default Footer;
