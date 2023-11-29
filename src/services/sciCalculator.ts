// services/sciCalculator.ts
import { SCIParameters } from '../models/SCIParameters';

export function calculateSCI(params: SCIParameters): number {
  // Destructure
  const {
    energyConsumedPerHourKw,
    hoursOperatedPerDay,
    carbonIntensityGCO2eqPerKWh,
    embodiedEmissionsGCO2eq,
    lifespanYears,
    numberOfUserRequestsPerDay,
  } = params;

  // Calculate operational emissions (O)
  const dailyEnergyConsumptionKWh = energyConsumedPerHourKw * hoursOperatedPerDay; // Total energy consumption per day
  const operationalEmissionsPerDay = dailyEnergyConsumptionKWh * carbonIntensityGCO2eqPerKWh; // gCO2eq/day

  // Calculate embodied emissions (M) over the lifespan
  const dailyEmbodiedEmissions = embodiedEmissionsGCO2eq / (lifespanYears * 365); // gCO2eq/day

  // Total daily emissions (C)
  const totalDailyEmissions = operationalEmissionsPerDay + dailyEmbodiedEmissions; // gCO2eq/day

  // Calculate SCI (C per R)
  const sci = totalDailyEmissions / numberOfUserRequestsPerDay; // gCO2eq/request

  return sci; // Return the SCI score
}


