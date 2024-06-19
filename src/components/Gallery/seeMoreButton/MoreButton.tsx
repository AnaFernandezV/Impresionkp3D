import React from "react";
import './MoreButton.sass';
import { Link } from 'react-router-dom';

const MoreButton: React.FC = () => {
  return(
    <>
    <Link to="/gallery"><button className="moreBtn">Ver más</button></Link>
    </>
  );

}

export { MoreButton };