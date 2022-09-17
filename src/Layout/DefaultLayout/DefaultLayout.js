import PropTypes from 'prop-types';
import Header from '~/Layout/components/Header';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import GoTop from '~/components/GoToTop';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const [showGoTop, setShowGoTop] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 1) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };
    return () => {
      window.onscroll = () => {};
    };
  }, []);
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          {showGoTop && <GoTop />}
          {children}
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
