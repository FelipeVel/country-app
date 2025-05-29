import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/table.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, Observable, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interface';

@Component({
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  private countryService = inject(CountryService);

  query = signal<string>('');

  countryResource = rxResource({
    params: () => ({ name: this.query() }),
    stream: ({ params }): Observable<Country[]> => {
      if (!params.name) {
        return of([]); // Return an empty array if no capital is provided
      }
      return this.countryService.searchByCountry(params.name); // Use the service to get countries by capital
    }
  });
}
