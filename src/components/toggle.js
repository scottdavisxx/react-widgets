import React from 'react';

const Toggle = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <h2 className='hidden-message'>{show && 'Hidden Message'}</h2>
      <button
        className='show-hide'
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Toggle;
