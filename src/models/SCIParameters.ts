// models/SCIParameters.ts
export interface SCIParameters {
    energyConsumedPerHourKw: number; // Energy consumed per hour (kW)
    hoursOperatedPerDay: number; // Hours operated per day
    carbonIntensityGCO2eqPerKWh: number; // Carbon intensity (gCO2eq/kWh)
    embodiedEmissionsGCO2eq: number; // Embodied emissions (gCO2eq)
    lifespanYears: number; // Lifespan (years)
    numberOfUserRequestsPerDay: number; // Number of user requests per day
  }
  