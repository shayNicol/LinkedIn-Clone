
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import './Option.css';

function Option({ PersonIcon, Icon, title, onClick }) {
 
  
  return (
    <div onClick={onClick} className="Option">
      {Icon && <Icon className="Option_icon" />}
      {PersonIcon && <PersonIcon className="Option_icon" src={user?.photoUrl} />}
      <h3 className="Option_title">{title}</h3>
    </div>
  )
}

export default Option