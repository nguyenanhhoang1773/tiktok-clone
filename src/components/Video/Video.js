import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './Video.module.scss';
import { IconPlayVideo, IconPauseVideo, IconVolume, IconVolumeMuted } from '~/components/icons';
const cx = classNames.bind(styles);
function Video({ videoSrc }) {
  const timedRef = useRef();
  const remoteTimeRef = useRef();
  const volumeBarRef = useRef();
  const videoRef = useRef();
  const volumeLevel = useRef();
  const controlVolumeRef = useRef();
  const remoteVolumeRef = useRef();
  const videoBarRef = useRef();
  const supportMuted = useRef(false);
  const volumeValue = useRef({ time: 1, height: 0, top: 0 });
  const [isTimed, setIsTimed] = useState([0, '00']);
  const [totalTime, setTotalTime] = useState('');
  const [isClickTime, setIsClickTime] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const RunBtn = isPlaying ? IconPauseVideo : IconPlayVideo;
  const IconVolumeTag = isMuted ? IconVolumeMuted : IconVolume;
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
  const handleVolumeMouseDown = (e) => {
    setIsClick(true);
  };
  document.onmouseup = (e) => {
    if (isClick) {
      setIsClick(false);
    }
    if (isClickTime) {
      setIsClickTime(false);
    }
  };
  useEffect(() => {
    const remoteVolumeElement = remoteVolumeRef.current;
    const videoElement = videoRef.current;
    if (isClick) {
      document.onmousemove = (e) => {
        let result = e.pageY - getOffset(volumeBarRef.current).top;
        if (result > 0 && result < 50) {
          volumeLevel.current.style.height = result + 'px';
          remoteVolumeElement.style.top = result + 'px';
          videoElement.volume = 1 - remoteVolumeElement.offsetTop * 0.02;
        } else if (result <= 0) {
          videoElement.volume = 1;
          volumeLevel.current.style.height = 0;
          remoteVolumeElement.style.top = 0;
        } else if (result >= 50) {
          videoElement.volume = 0;
          volumeLevel.current.style.height = 50 + 'px';
          remoteVolumeElement.style.top = 50 + 'px';
        }
      };
    }
    return () => {
      document.onmousemove = () => {};
    };
  }, [isClick]);

  const handleMouseDownTime = (e) => {
    setIsClickTime(true);
  };
  const handleCLickTime = (e) => {
    timedRef.current.style.width = e.pageX - getOffset(videoBarRef.current).left + 'px';
    remoteTimeRef.current.style.left = e.pageX - getOffset(videoBarRef.current).left + 'px';
    videoRef.current.currentTime = (timedRef.current.offsetWidth * videoRef.current.duration) / 180;
  };

  useEffect(() => {
    if (isClickTime) {
      document.onmousemove = (e) => {
        const result = e.pageX - getOffset(videoBarRef.current).left;
        if (result >= 0 && result <= 180) {
          timedRef.current.style.width = result + 'px';
          remoteTimeRef.current.style.left = result + 'px';
          videoRef.current.currentTime = (timedRef.current.offsetWidth * videoRef.current.duration) / 180;
        } else if (result < 0) {
          timedRef.current.style.width = 0;
          remoteTimeRef.current.style.left = 0;
        } else if (result > 180) {
          timedRef.current.style.width = '180px';
          remoteTimeRef.current.style.left = '180px';
        }
      };
    }
    return () => {
      document.onmousemove = () => {};
    };
  }, [isClickTime]);
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }
  useEffect(() => {
    if (isMuted) {
      volumeValue.current.time = videoRef.current.volume;
      volumeValue.current.height = volumeLevel.current.offsetHeight;
      volumeValue.current.top = remoteVolumeRef.current.offsetTop;
      volumeLevel.current.style.height = 50 + 'px';
      remoteVolumeRef.current.style.top = 50 + 'px';
      videoRef.current.volume = 0;
    } else {
      if (!supportMuted.current) {
        videoRef.current.volume = volumeValue.current.time;
        volumeLevel.current.style.height = volumeValue.current.height + 'px';
        remoteVolumeRef.current.style.top = volumeValue.current.top + 'px';
      }
      // volumeValue.current = {s
      //   time: videoRef.current.volume,
      //   height: volumeLevel.current.offsetHeight,
      //   top: remoteVolumeRef.current.offsetTop,
      // };
    }
  }, [isMuted]);
  return (
    <div onClick={(e) => handleRunVideo(e)} className={cx('wrapper-video')}>
      <video
        onVolumeChange={(e) => {
          if (e.target.volume === 0) {
            setIsMuted(true);
          } else {
            setIsMuted(false);
          }
        }}
        onTimeUpdate={(e) => {
          if (Math.floor(videoRef.current.currentTime % 60) < 10) {
            setIsTimed([
              Math.floor(videoRef.current.currentTime / 60),
              '0' + Math.floor(videoRef.current.currentTime % 60),
            ]);
          } else {
            setIsTimed([Math.floor(videoRef.current.currentTime / 60), Math.floor(videoRef.current.currentTime % 60)]);
          }

          timedRef.current.style.width = videoRef.current.currentTime * (180 / videoRef.current.duration) + 'px';
          remoteTimeRef.current.style.left = videoRef.current.currentTime * (180 / videoRef.current.duration) + 'px';
        }}
        loop
        ref={videoRef}
        onMouseOver={() => {
          setTotalTime(Math.floor(videoRef.current.duration / 60) + ':' + Math.floor(videoRef.current.duration % 60));
          if (!isClick) {
            controlVolumeRef.current.classList.remove(cx('show'));
          }
        }}
        onMouseOut={() => {
          controlVolumeRef.current.classList.remove(cx('show'));
        }}
        width="280px"
        height="500px"
        className={cx('video')}
      >
        <source src={videoSrc}></source>
      </video>
      <RunBtn onClick={(e) => handleRunVideo(e)} className={cx('run-btn')} />
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        onMouseMove={() => {
          controlVolumeRef.current.classList.add(cx('show'));
        }}
        className={cx('volume-wrapper')}
      >
        <div ref={controlVolumeRef} className={cx('volume-control')}>
          <div className={cx('background-volume')}></div>
          <div
            ref={volumeBarRef}
            onMouseUp={() => {
              if (!isMuted) {
                supportMuted.current = false;
              }
            }}
            onMouseDown={(e) => {
              if (isMuted) {
                supportMuted.current = true;
              }
              handleVolumeMouseDown(e);
              const element = e.target.closest(`.${cx('volume-bar')}`);
              const remoteVolumeElement = remoteVolumeRef.current;
              const videoElement = videoRef.current;

              if (e.pageY - getOffset(element).top >= 0 && e.pageY - getOffset(element).top <= 50) {
                remoteVolumeRef.current.style.top = e.pageY - getOffset(element).top + 'px';
                volumeLevel.current.style.height = e.pageY - getOffset(element).top + 'px';
                videoElement.volume = 1 - remoteVolumeElement.offsetTop * 0.02;
              } else if (e.pageY - getOffset(element).top < 0) {
                remoteVolumeRef.current.style.top = 0;
                volumeLevel.current.style.height = 0;
                videoElement.volume = 1;
              } else if (e.pageY - getOffset(element).top > 50) {
                remoteVolumeRef.current.style.top = 50 + 'px';
                volumeLevel.current.style.height = 50 + 'px';
                videoElement.volume = 0;
              }
            }}
            className={cx('volume-bar')}
          >
            <div ref={volumeLevel} className={cx('volume-level')}></div>
            <div ref={remoteVolumeRef} className={cx('volume-remote')}></div>
          </div>
        </div>
        <IconVolumeTag
          onClick={(e) => {
            setIsMuted((prev) => !prev);
          }}
          className={cx('volumeIcon')}
        />
      </div>
      <div onClick={(e) => e.stopPropagation()} className={cx('video-control')}>
        <div className={cx('video-control-bar')}>
          <div
            ref={videoBarRef}
            onMouseDown={(e) => {
              handleCLickTime(e);
              handleMouseDownTime(e);
            }}
            className={cx('control-time')}
          >
            <div ref={timedRef} className={cx('timed')}></div>
            <div ref={remoteTimeRef} className={cx('remote-time')}></div>
          </div>
        </div>
        {totalTime && (
          <span className={cx('time-video')}>
            <span>{isTimed[0] + ':' + isTimed[1]}</span>/{totalTime}
          </span>
        )}

        <span></span>
      </div>
    </div>
  );
}

export default Video;
