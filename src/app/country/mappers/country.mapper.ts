import type { Country } from "../interfaces/country.interface";
import type { CountryResponse } from "../interfaces/response.interface";

export class CountryMapper {
  static toCountry(response: CountryResponse): Country {
    return {
      id: response.cca2,
      icono: response.flags.svg,
      bandera: response.flags.png,
      nombre: response.translations["spa"]?.common || response.name.common,
      capital: response.capital ? response.capital[0] : 'N/A',
      poblacion: response.population
    };
  };

  static toCountries(response: CountryResponse[]): Country[] {
    return response.map(CountryMapper.toCountry);
  }

}
