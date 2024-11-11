import React, { createContext, ReactNode, useContext, useState } from 'react';

// Context 타입 정의
interface AccordionContextProps {
  isShowInner: boolean;
  setIsShowInner: React.Dispatch<React.SetStateAction<boolean>>;
}

// Context 생성 (초기값은 null 처리)
const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  const [isShowInner, setIsShowInner] = useState(false);

  return (
    <AccordionContext.Provider value={{ isShowInner, setIsShowInner }}>
      {children}
    </AccordionContext.Provider>
  );
};

// Context 사용을 위한 커스텀 훅
const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext must be used within an Accordion');
  }
  return context;
};

const Outer = ({ children }: { children: ReactNode }) => {
  const { isShowInner, setIsShowInner } = useAccordionContext();
  return (
    <div
      className='flex flex-row justify-between p-[8px] cursor-pointer'
      onClick={() => setIsShowInner((prev) => !prev)}
    >
      {children}
      {isShowInner ? <p>{'<'}</p> : <p>{'>'}</p>}
    </div>
  );
};

const Inner = ({ children }: { children: ReactNode }) => {
  const { isShowInner } = useAccordionContext();
  if (!isShowInner) return <></>;
  return <>{children}</>;
};

Accordion.Outer = Outer;
Accordion.Inner = Inner;

export default Accordion;
