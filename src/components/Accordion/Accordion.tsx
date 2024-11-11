import React, { ReactNode, useState } from 'react';

interface Props {
  outerText: string;
  children: ReactNode;
}

const Accordion: React.FC<Props> = ({ outerText, children }) => {
  const [isShowInner, setIsShowInner] = useState(false);
  return (
    <>
      <div
        className='flex flex-row justify-between p-[8px] cursor-pointer'
        onClick={() => setIsShowInner((prev) => !prev)}
      >
        <p>{outerText}</p>
        {isShowInner ? <p>{'<'}</p> : <p>{'>'}</p>}
      </div>
      {isShowInner && <div>{children}</div>}
    </>
  );
};

export default Accordion;
