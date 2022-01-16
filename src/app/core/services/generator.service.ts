import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  generate(n: number): string {
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < n; i++) {
      result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }

    return result;
  }
}

export const GeneratedString = new InjectionToken<string>('Generated string');
