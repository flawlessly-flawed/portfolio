import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io5'

const socials = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className='flex justify-between items-center 
        w-40 h-1/4 px-4 bg-white'>
          <a href="http://">
            <>
              LinkedIn
              <IoLogoLinkedin />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default socials

