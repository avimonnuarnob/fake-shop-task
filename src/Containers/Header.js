import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterProducts } from '../Redux/Action/ProductActions';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='ui fixed menu'>
        <div
          className='ui container center'
          style={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <NavLink to='/'>
            <h2 style={{ margin: 0 }}>FAKE SHOP</h2>
          </NavLink>
          <div>
            <input
              type='text'
              placeholder='Search'
              onChange={(e) => {
                dispatch(filterProducts(e.target.value));
              }}
              style={{
                outline: 0,
                border: '1px solid #ccc',
                borderRadius: '15px',
                padding: '1rem',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
