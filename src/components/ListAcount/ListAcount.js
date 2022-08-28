import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ListAcount.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function ListAcount({ title, children, footerBtn }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('title')}>{title}</p>
      {children}
      <Button className={cx('footer-Btn')}>{footerBtn}</Button>
    </div>
  );
}
ListAcount.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footerBtn: PropTypes.string.isRequired,
};
export default ListAcount;
