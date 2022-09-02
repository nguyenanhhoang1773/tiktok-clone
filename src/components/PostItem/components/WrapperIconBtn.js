import classNames from 'classnames/bind';
import styles from './WrapperIconBtn.module.scss';
const cx = classNames.bind(styles);
function WrapperIconBtn({ children, total }) {
  return (
    <>
      <div className={cx('wrapper')}>{children}</div>
      {total && <p className={cx('total')}>{total}</p>}
    </>
  );
}

export default WrapperIconBtn;
