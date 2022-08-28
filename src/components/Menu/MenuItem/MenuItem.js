import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ children, iconLeft, outLineTop, to, onClick, classNames, onBack }) {
  return (
    <Button
      onClick={onClick}
      to={to}
      iconLeft={iconLeft}
      className={`${cx('menu-item', { outLineTop: outLineTop })} ${classNames}`}
    >
      {children}
    </Button>
  );
}
MenuItem.propTypes = {
  to: PropTypes.string,
  classNames: PropTypes.string,
  iconLeft: PropTypes.object,
  outLineTop: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
export default MenuItem;
