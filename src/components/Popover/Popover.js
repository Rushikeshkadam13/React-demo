import React, { useState } from 'react';

const Popover = ({ content, children }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {showPopover && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: 'white',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            padding: '8px',
            zIndex: 999,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
