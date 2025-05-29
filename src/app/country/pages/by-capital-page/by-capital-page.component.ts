import { Component, inject, resource, Signal, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/table.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { catchError } from 'rxjs';

@Component({
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  private countryService = inject(CountryService);

  query: Signal<string> = signal<string>('');

  countryResource = resource({
    params: () => ({ capital: this.query() }),
    loader: ({params}) => async () => {
      console.log('Loading countries by capital:', params.capital);
      return []
    }
  })

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
