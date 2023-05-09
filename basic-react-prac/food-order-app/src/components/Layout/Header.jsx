import React from 'react'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>리액트주문</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="다양한 음식이 있는 테이블" />
        </div>
    </React.Fragment>
  )
}

export default Header