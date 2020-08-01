import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './../../firebase/firebase.utils';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from './../../redux/user/user.selector'
import { selectCartHidden } from './../../redux/cart/cart.selector';

import { ReactComponent as Logo } from './../../assets/logo.svg';

import { HeaderContainer, LogoContainer, OptionsConatainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsConatainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">Contact</OptionLink>
      {
        currentUser ? 
        <OptionLink as='div' onClick={() => auth.signOut()}>Sign out</OptionLink>
        :
        <OptionLink to="/signin">Sign in</OptionLink>
      }
      <CartIcon />
    </OptionsConatainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
);

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);