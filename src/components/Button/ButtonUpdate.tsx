import React from 'react';

interface Props {
  onClick: () => void;
  text: string;
}

const ButtonUpdate: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonUpdate;