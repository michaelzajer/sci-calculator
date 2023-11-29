"use client";

import React, { useState } from 'react';
import { SCIParameters } from '../models/SCIParameters';
import { calculateSCI } from '../services/sciCalculator';

const Form: React.FC = () => {
  const [sciParams, setSciParams] = useState<SCIParameters>({
    energyConsumedPerHourKw: 0,
    hoursOperatedPerDay: 0,
    carbonIntensityGCO2eqPerKWh: 0,
    embodiedEmissionsGCO2eq: 0,
    lifespanYears: 0,
    numberOfUserRequestsPerDay: 0,
  });

  const [sciScore, setSciScore] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSciParams({
      ...sciParams,
      [name]: parseFloat(value) || 0,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const score = calculateSCI(sciParams);
    setSciScore(score);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <form onSubmit={handleSubmit} className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold mb-4">Software Carbon Intensity Specification Score Calculator</h2>
          <img src="/sci.png" alt="SCI Equation" className="w-500 mx-auto" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Define Energy Consumption (E)</h3>
          <div className="flex items-center mb-3">
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="number"
              name="energyConsumedPerHourKw"
              placeholder="Energy Consumed per Hour (kW)"
              value={sciParams.energyConsumedPerHourKw}
              onChange={handleInputChange}
            />
            <span className="mx-2">*</span>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="number"
              name="hoursOperatedPerDay"
              placeholder="Hours Operated per Day"
              value={sciParams.hoursOperatedPerDay}
              onChange={handleInputChange}
            />
          </div>
          <p>Total Energy per Day: {(sciParams.energyConsumedPerHourKw * sciParams.hoursOperatedPerDay).toFixed(2)} kWh</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Define Carbon Intensity (I)</h3>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            type="number"
            name="carbonIntensityGCO2eqPerKWh"
            placeholder="Carbon Intensity (gCO2eq/kWh)"
            value={sciParams.carbonIntensityGCO2eqPerKWh}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Define Embodied Emissions (M)</h3>
          <div className="flex items-center mb-3">
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="number"
              name="embodiedEmissionsGCO2eq"
              placeholder="Embodied Emissions (gCO2eq)"
              value={sciParams.embodiedEmissionsGCO2eq}
              onChange={handleInputChange}
            />
            <span className="mx-2">/</span>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="number"
              name="lifespanYears"
              placeholder="Lifespan (years)"
              value={sciParams.lifespanYears}
              onChange={handleInputChange}
            />
          </div>
          <p>Embodied Emissions per Day: {(sciParams.embodiedEmissionsGCO2eq / (sciParams.lifespanYears * 365)).toFixed(4)} gCO2eq/day</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Defined Number of Functional Units (R)</h3>
          <div className="flex items-center mb-3">
            <label className="block text-gray-700 text-sm font-bold mr-2" htmlFor="numberOfUserRequestsPerDay">
              User Requests per Day:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id="numberOfUserRequestsPerDay"
              type="number"
              name="numberOfUserRequestsPerDay"
              value={sciParams.numberOfUserRequestsPerDay}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Calculate
          </button>
          {sciScore !== null && (
            <p className="inline-block text-sm font-semibold text-gray-700">SCI Score: {sciScore.toFixed(4)} gCO2eq/request</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;