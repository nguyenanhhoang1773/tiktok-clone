import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function MenuItem({ children, to, icon, iconActive }) {
  const [active, setActive] = useState(false);
  const handleActive = (nav) => {
    nav.isActive && setActive(true);
    !nav.isActive && setActive(false);
    return cx('menu_item', {
      active: nav.isActive,
    });
  };
  return (
    <NavLink className={handleActive} to={to}>
      <span className={cx('icon')}>{active ? iconActive : icon}</span>
      <span className={cx('title')}>{children}</span>
    </NavLink>
  );
}

export default MenuItem;
