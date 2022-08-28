import PropTypes from 'prop-types';
import styles from './AccoutItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccoutItem({ data }) {
  const { avatar, nickname, full_name } = data;
  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      <img alt="anh gai xing" className={cx('image')} src={avatar}></img>
      <div className={cx('wrapperInfor')}>
        <h4 className={cx('name')}>
          {nickname}
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </h4>
        <p className={cx('account')}>{full_name}</p>
      </div>
    </Link>
  );
}
AccoutItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccoutItem;
