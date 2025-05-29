import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import type { CountryResponse } from '../interfaces/response.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();

    return this.http.get<CountryResponse[]>(`${API_URL}/capital/${query}`).pipe(
      map(CountryMapper.toCountries),
      catchError((error: any) => {
        return throwError(() => new Error(`Error fetching countries by capital: ${error.message}`));
      })
    );
  }
}
