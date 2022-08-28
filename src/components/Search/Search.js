import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccoutItem from '~/components/AccoutItem';
import styles from './search.module.scss';
import { useDebounce } from '~/hooks';
import * as apiService from '~/Service';

const cx = classNames.bind(styles);
function Search() {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResul] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputElement = useRef();
  const debounced = useDebounce(value, 500);
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResul([]);
      return;
    }
    const fetch = async () => {
      setLoading(true);
      const res = await apiService.search(debounced);
      setSearchResul(res);
      setLoading(false);
    };
    fetch();
  }, [debounced]);
  return (
    <div>
      <HeadlessTippy
        onClickOutside={() => setShowResult(false)}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <WrapperPopper>
              <p className={cx('account-text')}>Tài khoản</p>
              {searchResult.map((item) => (
                <AccoutItem key={item.id} data={item} />
              ))}
            </WrapperPopper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            onFocus={() => setShowResult(true)}
            ref={inputElement}
            value={value}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (!inputValue.startsWith(' ')) {
                setValue(inputValue);
              }
            }}
            className={cx('input')}
            placeholder="Tìm kiếm tài khoản và video"
          />
          {value && !loading && (
            <button
              onClick={() => {
                setSearchResul([]);
                setValue('');
                inputElement.current.focus();
              }}
              className={cx('clear')}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button onMouseDown={(e) => e.preventDefault()} className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
