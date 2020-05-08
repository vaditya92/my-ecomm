import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './../../firebase/firebase.utils';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from './../../redux/user/user.selector'
import { selectCartHidden } from './../../redux/cart/cart.selector';

import { ReactComponent as Logo } from './../../assets/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/shop">Contact</Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>Sign out</div>
        :
        <Link className="option" to="/signin">Sign in</Link>
      }
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown /> }
  </div>
);

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);