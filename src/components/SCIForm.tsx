import React from 'react';

const SCIForm = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex space-x-4 items-center">
        <label>
          Energy consumed by the software (kwh)
          <input type="text" className="block w-24 border mt-2" />
        </label>
        <span>=</span>
        <span>(</span>
        <label>
          <span>E</span>
          <input type="text" className="block w-24 border mt-2" />
        </label>
        <span>*</span>
        <label>
          location based marginal intensity
          <input type="text" className="block w-24 border mt-2" />
        </label>
        <span>) +</span>
        <label>
          <span>M</span>
          <input type="text" className="block w-24 border mt-2" />
        </label>
        <span>per</span>
        <label>
          <span>R</span>
          <input type="text" className="block w-24 border mt-2" />
        </label>
      </div>

      <div>
        <label>
          embodied carbon emissions of the hardware the software runs on
          <input type="text" className="block w-24 border mt-2" />
        </label>
      </div>

      <button className="px-4 py-2 bg-blue-500 text-white rounded">Calculate</button>
    </div>
  );
};

export default SCIForm;
