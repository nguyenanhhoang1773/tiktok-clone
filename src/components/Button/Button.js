import PropTypes from 'prop-types';
import styles from './Button.moudule.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  disabled,
  className,
  primary,
  outline,
  longer,
  iconLeft,
  small,
  large,
  rounded,
  children,
  ...passProps
}) {
  let Tag = 'button';
  const classes = cx('wrapper', {
    primary,
    small,
    disabled,
    longer,
    large,
    rounded,
    outline,
    [className]: className,
  });
  const props = {
    ...passProps,
  };
  if (to) {
    props.to = to;
    Tag = Link;
  } else if (href) {
    props.href = href;
    Tag = 'a';
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on')) {
        delete props[key];
      }
    });
  }
  return (
    <Tag className={classes} {...props}>
      {iconLeft && (
        <span className={cx('icon')}>
          <FontAwesomeIcon icon={iconLeft}></FontAwesomeIcon>
        </span>
      )}
      {children}
    </Tag>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  iconLeft: PropTypes.object,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  longer: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Button;
