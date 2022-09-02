import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuItem({ children, to, icon, iconActive }) {
  const handleActive = (nav) => {
    return cx('menu_item', {
      active: nav.isActive,
    });
  };
  return (
    <NavLink className={handleActive} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('icon_active')}>{iconActive}</span>
      <span className={cx('title')}>{children}</span>
    </NavLink>
  );
}

export default MenuItem;
