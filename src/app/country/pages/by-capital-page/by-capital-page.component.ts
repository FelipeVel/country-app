import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/table.component";
import { CountryService } from '../../services/country.service';

@Component({
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  private countryService = inject(CountryService);
  onSearchCapital(capital: string): void {
    console.log('Searching for capital:', capital);
    // Implement the search logic here
  }
}
