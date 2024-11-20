import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';



function Header() {
  return (
    <div className= "header">
      <IconButton>
      < PersonIcon fontSize='large' className='header__icon'/>
      </IconButton>
    
    <img
     className='header__logo'
     src='https://w7.pngwing.com/pngs/399/756/png-transparent-tinder-logo-computer-icons-tinder-angle-logo-magenta-thumbnail.png'
     alt=''
    />
    <IconButton>
    <ForumIcon fontSize='large' className='header__icon' />
    </IconButton>
   

    </div>
  )
}

export default Header