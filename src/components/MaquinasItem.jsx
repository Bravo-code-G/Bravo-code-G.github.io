import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/MaquinasItem.scss';

const MaquinasItem = (props) => {

  // const titlee = 'Test';
  const { NombreDelElemento, imagen, estado, pendientes } = props;

  return (
    // <MaquinasSelect/>
    <div id='carruselmaquinas'>
      <div className='carruselmaquinas_item'>
        <img className='ImgM' src='https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='' />
        <div className='carruselmaquinas_Link'>
          <button type='button' className='carruselmaquinas_boton' value=''>
            <h4 className='maquinas_boton_font'>{NombreDelElemento}</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

// Maquinas.propTypes = {
//   NombreDelElemento: PropTypes.string,
//   estado: PropTypes.bool,
//   pendientes: PropTypes.number,
// };

export default MaquinasItem;
