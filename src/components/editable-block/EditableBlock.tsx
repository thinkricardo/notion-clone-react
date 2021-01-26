import React, { useRef, useState } from 'react';

export const EditableBlock: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState('Type / for commands');

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    setValue(elementRef.current.innerText);
  };

  return (
    <div ref={elementRef} contentEditable={true} onInput={handleInput}>
      {value}
    </div>
  );
};
