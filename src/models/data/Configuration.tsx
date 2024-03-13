import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export interface IConfiguration {
  getId(): number;
  setId(id: number): void;
  setWeight(weight: Float): void;
  getWeight(): Float;

  setFatRate(fatRate: Float): void;
  getFatRate(): Float;

  setMultiplier(multiplier: Float): void;
  getMultiplier(): Float;

  setMassSurplus(massSurplus: Float): void;
  getMassSurplus(): Float;

  setDryDeficit(dryDeficit: Float): void;
  getDryDeficit(): Float;

  setProteinCoefficient(proteinCoefficient: Float): void;
  getProteinCoefficient(): Float;

  setLipidCoefficient(lipidCoefficient: Float): void;
  getLipidCoefficient(): Float;

  setDate(date: Date): void;
  getDate(): Date;
}

export class Configuration implements IConfiguration {
  private id: number;
  private weight: Float;
  private fatRate: Float;
  private multiplier: Float;
  private massSurplus: Float;
  private dryDeficit: Float;
  private proteinCoefficient: Float;
  private lipidCoefficient: Float;
  private date: Date;

  constructor(
    id: number,
    weight: Float,
    fatRate: Float,
    multiplier: Float,
    massSurplus: Float,
    dryDeficit: Float,
    proteinCoefficient: Float,
    lipidCoefficient: Float,
    date: Date
  ) {
    this.id = id;
    this.weight = weight;
    this.fatRate = fatRate;
    this.multiplier = multiplier;
    this.massSurplus = massSurplus;
    this.dryDeficit = dryDeficit;
    this.proteinCoefficient = proteinCoefficient;
    this.lipidCoefficient = lipidCoefficient;
    this.date = date;
  }

  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  setWeight(weight: Float): void {
    this.weight = weight;
  }
  getWeight(): Float {
    return this.weight;
  }

  setFatRate(fatRate: Float): void {
    this.fatRate = fatRate;
  }
  getFatRate(): Float {
    return this.fatRate;
  }

  setMultiplier(multiplier: Float): void {
    this.multiplier = multiplier;
  }
  getMultiplier(): Float {
    return this.multiplier;
  }

  setMassSurplus(massSurplus: Float): void {
    this.massSurplus = massSurplus;
  }
  getMassSurplus(): Float {
    return this.massSurplus;
  }

  setDryDeficit(dryDeficit: Float): void {
    this.dryDeficit = dryDeficit;
  }
  getDryDeficit(): Float {
    return this.dryDeficit;
  }

  setProteinCoefficient(proteinCoefficient: Float): void {
    this.proteinCoefficient = proteinCoefficient;
  }
  getProteinCoefficient(): Float {
    return this.proteinCoefficient;
  }

  setLipidCoefficient(lipidCoefficient: Float): void {
    this.lipidCoefficient = lipidCoefficient;
  }
  getLipidCoefficient(): Float {
    return this.lipidCoefficient;
  }

  setDate(date: Date): void {
    this.date = date;
  }
  getDate(): Date {
    return this.date;
  }
}
