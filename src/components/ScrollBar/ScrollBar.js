import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styles from './ScrollBar.module.scss';
const cx = classNames.bind(styles);
function ScrollBar({ parentClass, height, maxScroll, heightLine }) {
  const scrollRef = useRef();
  useEffect(() => {
    const parentElement = document.querySelector(`.${parentClass}`);
    parentElement.onscroll = (e) => {
      scrollRef.current.style.top = (e.target.scrollTop * (heightLine - height)) / maxScroll + 'px';
      //   heightLine - height:chiều cao mà đoạn scrollbar chạy - chiều cao scrollbar
      //   maxScroll:chỉ số scrollTop tối đa
    };
    parentElement.onmouseenter = () => {
      scrollRef.current.classList.add(cx('show'));
    };
    parentElement.onmouseleave = () => {
      scrollRef.current.classList.remove(cx('show'));
    };
    return () => {
      parentElement.onscroll = () => {};
      parentElement.onmouseover = () => {};
      parentElement.onmouseout = () => {};
    };
  }, [height, heightLine, maxScroll, parentClass]);
  return <div ref={scrollRef} className={cx('wrapper')}></div>;
}
ScrollBar.propTypes = {
  parentClass: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  maxScroll: PropTypes.number.isRequired,
  heightLine: PropTypes.number.isRequired,
};
export default ScrollBar;
