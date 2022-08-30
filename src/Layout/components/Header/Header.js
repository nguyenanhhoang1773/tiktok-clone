import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPlane, IconMessage } from '~/components/icons';
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import isLogin from '~/constantLogin';
import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Menu from '~/components/Menu';
import Image from '~/components/Image';
import Search from '~/components/Search';
import config from '~/config';
import ModalKeyboard from '~/components/modal';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: faEarthAsia,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    type: 'support',
    icon: faCircleQuestion,
    title: 'Phản hồi và Trợ giúp',
    to: '/feedback',
  },
  {
    type: 'keyboard',
    icon: faKeyboard,
    title: 'Phím tắt trên bàn phím',
  },
];
const MENU_ITEMS_LOGGED = [
  {
    icon: faUser,
    title: 'Xem hồ sơ',
  },
  {
    icon: faCoins,
    title: 'Nhận xu',
  },
  {
    icon: faGear,
    title: 'Cài đặt',
  },
  ...MENU_ITEMS,
  {
    icon: faArrowRightFromBracket,
    title: 'Đăng xuất',
    outLineTop: true,
  },
];
function Header() {
  const [isModalKeyboard, setModalKeyboard] = useState(false);
  const handleHiddenOverflow = (isModalKeyboard) => {
    if (isModalKeyboard) {
      document.querySelector('body').classList.add(cx('overflow'));
    } else {
      document.querySelector('body').classList.remove(cx('overflow'));
    }
  };
  useEffect(() => {
    handleHiddenOverflow(isModalKeyboard);
  }, [isModalKeyboard]);
  const handleMenuChange = (item) => {
    switch (item.type) {
      case 'keyboard':
        setModalKeyboard(true);
        break;
      default:
        console.log('error');
    }
  };
  isModalKeyboard && handleHiddenOverflow();
  return (
    <header className={cx('wrapper')}>
      {isModalKeyboard && <ModalKeyboard setModalKeyboard={setModalKeyboard} />}
      <div className={cx('content')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </Link>
        <Search />
        <div className={cx('user')}>
          <Button className="textColor" outline longer iconLeft={faPlus}>
            Tải lên
          </Button>
          {isLogin ? (
            <>
              <Tippy delay={[0, 0]} content="Tin nhắn" placement="bottom">
                <button className={cx('logged-btn')}>
                  <IconPlane className={cx('space-top')} />
                </button>
              </Tippy>
              <Tippy delay={[0, 0]} content="Hộp thư" placement="bottom">
                <div className={cx('logged_wrapper')}>
                  <button className={cx('logged-btn')}>
                    <IconMessage className={cx('space-top')} />
                  </button>
                  <span className={cx('notification')}>12</span>
                </div>
              </Tippy>
            </>
          ) : (
            <Button primary>Đăng nhập</Button>
          )}
          <Menu
            hideOnClick={false}
            data={isLogin ? MENU_ITEMS_LOGGED : MENU_ITEMS}
            onChange={handleMenuChange}
            className={cx('menu')}
          >
            <div className={cx('other', { 'avatar-wrapper': isLogin })}>
              {isLogin ? (
                <Image fallback={images.noImage} className={cx('avatar')} src={images.avatar1} />
              ) : (
                <FontAwesomeIcon icon={faEllipsisVertical} />
              )}
            </div>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
