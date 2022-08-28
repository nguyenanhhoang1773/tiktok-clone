import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../ListAcount.module.scss';
import Image from '~/components/Image';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function AcountItem({ src, nickname, name, followed }) {
  return (
    <div>
      {followed && (
        <HeadlessTippy
          offset={[-20, 0]}
          delay={[700, 0]}
          interactive
          placement="bottom"
          render={(attrs) => (
            <div className={cx('knowMore')} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <div className={cx('knowMore-wrapper')}>
                  <div className={cx('header')}>
                    <Image className={cx('avatar')} src={src} />
                    <div>
                      <Button className={cx('follow-btn')} longer primary>
                        Follow
                      </Button>
                    </div>
                  </div>
                  <h4 className={cx('knowMore-nickname')}>
                    {nickname}
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                  </h4>

                  <p className={cx('knowMore-name')}>{name}</p>
                  <div>
                    <span className={cx('total')}>9.7M</span>
                    <p className={cx('total-name')}>Follower</p>
                    <span className={cx('total')}>231.1M</span>
                    <p className={cx('total-name')}>Thích</p>
                  </div>
                </div>
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx('acount-item')}>
            <Image src={src} className={cx('avatar')} />
            <div className={cx('infor')}>
              <span className={cx('nickname')}>
                <h4>{nickname}</h4>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
              </span>
              <p className={cx('name')}>{name}</p>
            </div>
          </div>
        </HeadlessTippy>
      )}
      {!followed && (
        <div className={cx('acount-item')}>
          <Image src={src} className={cx('avatar')} />
          <div className={cx('infor')}>
            <span className={cx('nickname')}>
              <h4>{nickname}</h4>
              <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
            </span>
            <p className={cx('name')}>{name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
AcountItem.propTypes = {
  src: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followed: PropTypes.bool,
};
export default AcountItem;
