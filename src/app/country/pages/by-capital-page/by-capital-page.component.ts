import { Component, inject, resource, Signal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/table.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, Observable, of } from 'rxjs';

@Component({
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  private countryService = inject(CountryService);

  query = signal<string>('');

  countryResource = rxResource({
    params: () => ({ capital: this.query() }),
    stream: ({ params }): Observable<Country[]> => {
      if (!params.capital) {
        return of([]); // Return an empty array if no capital is provided
      }
      return this.countryService.searchByCapital(params.capital); // Use the service to get countries by capital
    }
  });

  // countryResource = resource({
  //   params: () => ({ capital: this.query() }),
  //   loader: async ({params}) => {
  //     if (!params.capital) {
  //       return []; // Return an empty array if no capital is provided
  //     }
  //     return await firstValueFrom(this.countryService.searchByCapital(params.capital)); // Simulate network delay
  //   },
  // })

  /* isError = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  countries = signal<Country[]>([]);

  onSearchCapital(capital: string): void {
    this.isLoading.set(true);
      this.countryService.searchByCapital(capital).pipe(
      ).subscribe({
        next: (countries: Country[]) => {
          this.countries.set(countries)
        },
        error: (error: any) => {
          this.isError.set(error);
          this.isLoading.set(false);
          this.countries.set([]);
        }
      })
  } */
}
