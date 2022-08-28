import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
const cx = classNames.bind(styles);
function Menu({ className, children, data, onChange, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: data }]);
  const current = history[history.length - 1];
  const className1 = history.length === 2 ? cx('space-item') : '';
  const handleClickItem = (children, type, title) => {
    if (children) {
      setHistory((prev) => [...prev, children]);
    } else {
      onChange({ type, title });
    }
  };
  return (
    <Tippy
      hideOnClick={hideOnClick}
      offset={[8, 10]}
      placement="bottom-end"
      interactive
      delay={[0, 600]}
      render={(attrs) => (
        <div className={`${className} ${cx('menu')}`} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('wrapper')}>
            {history.length > 1 && (
              <HeaderMenu
                onClick={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
                title={current.title}
              />
            )}
            <div>
              {current.data.map(({ to, icon, type, title, outLineTop, children }, index) => (
                <MenuItem
                  outLineTop={outLineTop}
                  classNames={className1}
                  onClick={() => handleClickItem(children, type, title)}
                  to={to}
                  key={index}
                  iconLeft={icon}
                >
                  {title}
                </MenuItem>
              ))}
            </div>
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Menu;
