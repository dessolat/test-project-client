import React from 'react';

const Navi = ({ page, setPage, maxPages }) => {
  const handlePrevClick = () => {
    if (page <= 1) return;
    setPage(prev => prev - 1);
  };

  const handleNextClick = () => {
    if (page >= maxPages) return;
    setPage(prev => prev + 1);
  };

  return (
    <nav>
      <button className='nav-btn btn' onClick={handlePrevClick} disabled={page <= 1 && true}>
        {'<'}
      </button>
      <button className='nav-btn btn' onClick={handleNextClick} disabled={page >= maxPages && true}>
        {'>'}
      </button>
    </nav>
  );
};

export default Navi;
