import { useState } from 'react';

function Image({ src, className, fallback: imgDefaul }) {
  const [fallback, setFallback] = useState('');
  return (
    <img
      alt="khong co anh"
      onError={() => {
        setFallback(imgDefaul);
      }}
      className={className}
      src={fallback || src}
    ></img>
  );
}

export default Image;
