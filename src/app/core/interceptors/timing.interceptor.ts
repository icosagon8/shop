import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';

import { filter, map, Observable } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || req.method === 'PUT') {
      const startTime = Date.now();

      return next.handle(req).pipe(
        filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
        map((event: HttpEvent<any>) => {
          const endTime = Date.now();
          const requestDuration = endTime - startTime;
          console.log(`${requestDuration} ms`);

          return event;
        }),
      );
    }

    return next.handle(req);
  }
}
