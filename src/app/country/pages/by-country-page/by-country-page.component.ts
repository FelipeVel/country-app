import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
onSearchCountry(country: string): void {
throw new Error('Method not implemented.');
}
}
