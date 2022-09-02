import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import config from '~/config';
import Image from '~/components/Image';
import IconCheck, {
  IconPlayVideo,
  IconPauseVideo,
  IconHeart,
  IconMessageVideo,
  IconShare,
  IconMusic,
} from '~/components/icons';
import WrapperIconBtn from './components';
import Button from '../Button';

const cx = classNames.bind(styles);
function PostItem({ imgSrc, nickname, name, music, musicName, title, videoSrc, totalLove, totalComment, totalShare }) {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const RunBtn = isPlaying ? IconPauseVideo : IconPlayVideo;
  const handleRunVideo = (e) => {
    const videoElement = videoRef.current;
    if (e.target.closest('svg')) {
      e.stopPropagation();
    }
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying((prev) => !prev);
  };
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Button outline className={cx('follow-btn')}>
          Follow
        </Button>
        <Image className={cx('avatar')} src={imgSrc} />
        <div className={cx('note')}>
          <Link to={`/${nickname}`} className={cx('infor-link')}>
            <h3 className={cx('nickname')}>{nickname}</h3>
            <IconCheck className={cx('icon')} />
            <h4 className={cx('name')}>{name}</h4>
          </Link>
          <p className={cx('title')}> {title}</p>
          <Link className={cx('music')} to={config.routes.music}>
            <IconMusic className={cx('icon-music')} />
            {musicName}
          </Link>
          <div className={cx('container')}>
            <div onClick={(e) => handleRunVideo(e)} className={cx('wrapper-video')}>
              <video loop ref={videoRef} width="280px" height="500px" className={cx('video')}>
                <source src={videoSrc}></source>
              </video>
              <RunBtn onClick={(e) => handleRunVideo(e)} className={cx('run-btn')} />
            </div>
            <div className={cx('interactive')}>
              <WrapperIconBtn total={totalLove}>
                <IconHeart />
              </WrapperIconBtn>
              <WrapperIconBtn total={totalComment}>
                <IconMessageVideo />
              </WrapperIconBtn>
              <WrapperIconBtn total={totalShare}>
                <IconShare />
              </WrapperIconBtn>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
PostItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  music: PropTypes.string,
  musicName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  totalLove: PropTypes.string.isRequired,
  totalComment: PropTypes.string.isRequired,
  totalShare: PropTypes.string.isRequired,
};
export default PostItem;
