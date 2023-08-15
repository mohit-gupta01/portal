import React, { useState, useEffect } from 'react';

const Capabilities = () => {
  const capability = ['Analyses Annual Reports', 'Analyses Concalls', 'Analyses Financial Statements', 'Does Forensic Accounting', 'Monitors your Investments 24*7'];
  const colors = ['#D9AEFF', '#FCE3AC', '#AEFFFF', '#FFA8A8', '#AEFFAE'];
  const [currIndex, setCurrIndex] = useState(0);
  const [currentText, setCurrentText] = useState(capability[currIndex]);
  const [currColor, setCurrColor] = useState('black');
  const [animateClass, setAnimateClass] = useState('');
  const [animateClass2, setAnimateClass2] = useState('');

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % capability.length);
      setCurrentText(capability[currIndex]);
      setCurrColor(colors[currIndex]);
    }, 4000);
    return () => clearTimeout(interval);
  }, [currIndex]);

  useEffect(() => {
    if (animateClass === '') {
      setAnimateClass('capabilities-animate');
      const classTimeout = setTimeout(() => {
        setAnimateClass('');
      }, 4000);
      return () => clearTimeout(classTimeout);
    }
  }, [animateClass]);

  useEffect(() => {
    if (animateClass2 === '') {
      setAnimateClass2('animate-roll');
      const classTimeout = setTimeout(() => {
        setAnimateClass2('');
      }, 8000);
      return () => clearTimeout(classTimeout);
    }
  }, [animateClass2]);

  return (
    <div className='capabilities'>
      <span className={`${animateClass} ${animateClass2}`} data-text={currentText} style={{color: currColor}}>{currentText}<hr/></span>
    </div>
  );
};

export default Capabilities;
