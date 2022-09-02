import classNames from 'classnames/bind';
import styles from './WrapperPostItem.module.scss';
const cx = classNames.bind(styles);
function WrapperPostItem({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default WrapperPostItem;
