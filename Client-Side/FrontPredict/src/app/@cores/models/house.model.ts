export class House {
  bedroom: number;
  bathroom: number;
  erf_size: number;
  floor_size: number;
  type_property: string;
  pool: boolean;
  pets_allowed: boolean;
  taxes: number;
  garage: number;

  constructor(
    _bed: number,
    _bath: number,
    _erf: number,
    _floor: number,
    _type: string,
    _pool: boolean,
    _pets: boolean,
    _taxes: number,
    _garage: number
  ) {
    this.bedroom = _bed;
    this.bathroom = _bath;
    this.erf_size = _erf;
    this.floor_size = _floor;
    this.type_property = _type;
    this.pool = _pool;
    this.pets_allowed = _pets;
    this.taxes = _taxes;
    this.garage = _garage;
  }

}
