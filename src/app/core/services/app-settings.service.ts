import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, of, retry, share, switchMap } from 'rxjs';

import { AppSettingsModel } from '../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  getAppSettings(): Observable<AppSettingsModel> {
    const appSettings = this.localStorage.getItem('appSettings');

    if (appSettings) {
      return of(JSON.parse(appSettings));
    }

    return this.http.get<AppSettingsModel>('../../../assets/app-settings.json').pipe(
      retry(2),
      share(),
      catchError(this.handleError),
      switchMap((settings) => {
        if (settings) {
          this.localStorage.setItem('appSettings', JSON.stringify(settings));

          return of(settings);
        }

        return of({ isAsc: false });
      }),
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);

    return of(null);
  }
}
