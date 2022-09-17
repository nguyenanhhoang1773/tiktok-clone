import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './GoTop.module.scss';
const cx = classNames.bind(styles);
const body = document.querySelector('body');
function GoTop() {
  return (
    <div
      onClick={() => {
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      className={cx('wrapper')}
    >
      <FontAwesomeIcon icon={faArrowsUpToLine} className={cx('icon')} />
    </div>
  );
}

export default GoTop;
