import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function HeaderMenu({ title, onClick }) {
  return (
    <div className={cx('header-menu')}>
      <Button onClick={onClick} className={cx('header-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <h3 className={cx('header-title')}>{title}</h3>
    </div>
  );
}
HeaderMenu.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
export default HeaderMenu;
