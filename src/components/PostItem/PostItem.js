import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import { useRef, useState } from 'react';

import config from '~/config';
import Image from '~/components/Image';
import IconCheck, { IconPlayVideo, IconPauseVideo } from '~/components/icons';

const cx = classNames.bind(styles);
function PostItem({ imgSrc, nickname, name, music, musicName, title, video }) {
  const videoRef = useRef();
  const runBtn = useRef();
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
        <Image className={cx('avatar')} src={imgSrc} />
        <div className={cx('note')}>
          <Link to={`/${nickname}`} className={cx('infor-link')}>
            <h3 className={cx('nickname')}>{nickname}</h3>
            <IconCheck className={cx('icon')} />
            <h4 className={cx('name')}>{name}</h4>
          </Link>
          <p className={cx('title')}> {title}</p>
          <Link className={cx('music')} to={config.routes.music}>
            {musicName}
          </Link>
          <div className={cx('container')}>
            <div onClick={(e) => handleRunVideo(e)} className={cx('wrapper-video')}>
              <video ref={videoRef} width="280px" height="500px" className={cx('video')}>
                <source src="https://v16-webapp.tiktok.com/097c0516b835f59b29218d0e93eaed5a/63110574/video/tos/useast2a/tos-useast2a-pve-0037-aiso/013347923f6748a4a789ae8d7591c613/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2472&bt=1236&cs=0&ds=3&ft=eXd.6Hk_Myq8ZBmR.he2NXUQml7Gb&mime_type=video_mp4&qs=0&rc=NTw7NGk1N2c3aTxnZzszZ0BpM2U4cDs6ZmhlZjMzZjgzM0AzMy0yLjIxXy4xXjZeYzYuYSNna2JrcjRvLTNgLS1kL2Nzcw%3D%3D&l=202209011316150102450432131F20B425&btag=80000"></source>
              </video>
              <RunBtn ref={runBtn} onClick={(e) => handleRunVideo(e)} className={cx('run-btn')} />
            </div>
          </div>
        </div>
      </header>
      {/* <div className={cx('container')}>
        <button>
          <IconHeart />
        </button>
        <button></button>
        <button></button>
      </div> */}
    </div>
  );
}

export default PostItem;
