import classNames from 'classnames/bind';
import styles from './ModalKeyboard.module.scss';
import { IconUpBtn, IconDownBtn, IconLBtn, IconMBtn, IconClose } from '~/components/icons';
const cx = classNames.bind(styles);

function ModalKeyboard({ setModalKeyboard }) {
  const handleClose = (e) => {
    setModalKeyboard(false);
  };
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div onClick={handleClose} className={cx('wrapper')}>
      <div onClick={handleStopPropagation} className={cx('container')}>
        <IconClose onClick={handleClose} width="2.2rem" height="2.2rem" className={cx('close-btn')} />
        <div className={cx('title')}>Phím tắt trên bàn phím</div>
        <div className={cx('body')}>
          <div className={cx('guide')}>
            <span>Quay về video trước</span>
            <IconUpBtn width="2.4rem" height="2.4rem" />
          </div>
          <div className={cx('guide')}>
            <span>Đi đến video tiếp theo</span>
            <IconDownBtn width="2.4rem" height="2.4rem" />
          </div>
          <div className={cx('guide')}>
            <span>Thích video</span>
            <IconLBtn width="2.4rem" height="2.4rem" />
          </div>
          <div className={cx('guide')}>
            <span>Tắt tiếng / bật tiếng vide</span>
            <IconMBtn width="2.4rem" height="2.4rem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalKeyboard;
