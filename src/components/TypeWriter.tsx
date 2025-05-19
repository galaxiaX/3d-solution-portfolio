import { useEffect, useState } from 'react';

type Props = {
  text: string;
  loop?: boolean;
};
const TypeWriter = ({ text, loop }: Props) => {
  const [showText, setShowText] = useState('');
  const [isAdding, setIsAdding] = useState(true);

  useEffect(() => {
    if (isAdding) {
      const increaseInterval = setInterval(() => {
        setShowText(prevText => {
          if (prevText.length >= text.length) {
            clearInterval(increaseInterval);
            setTimeout(() => setIsAdding(false), 1000);
            return prevText;
          }
          return prevText + text[prevText.length];
        });
      }, 100);

      return () => clearInterval(increaseInterval);
    } else {
      if (!loop) return;
      const decreaseInterval = setInterval(() => {
        setShowText(prevText => {
          if (prevText.length === 0) {
            clearInterval(decreaseInterval);
            setTimeout(() => setIsAdding(true), 300);
            return prevText;
          }
          return prevText.slice(0, -1);
        });
      }, 100);

      return () => clearInterval(decreaseInterval);
    }
  }, [isAdding, loop, text]);

  return (
    <>
      {showText}
      {showText.length === text.length ? null : (
        <span className='animate-ping font-light'>|</span>
      )}
    </>
  );
};

export default TypeWriter;
