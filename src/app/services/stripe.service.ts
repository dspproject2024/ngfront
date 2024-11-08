// src/app/services/stripe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

  createCheckoutSession(
    lineItems: any[],
    successUrl: string,
    cancelUrl: string
  ): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(
      environment.apiUrl+"/stripe/checkout",
      {
        line_items: lineItems,
        success_url: successUrl,
        cancel_url: cancelUrl,
      }
    );
  }
}
