import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className='select'>
      <select className='rounded' onChange={func} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o.toLowerCase()}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
