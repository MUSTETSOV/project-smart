import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../models/brands';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseurl = 'https://b6e0af01.ngrok.io/api/brands';

  constructor(private http: HttpClient) {}

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
     })
    }

    GetBrand(id): Observable<Brand> {
      return this.http.get<Brand>(this.baseurl)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }

    // GET
  GetBrands(): Observable<Brand> {
      return this.http.get<Brand>(this.baseurl)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }



  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }






   }

  // GET





  // // POST
  // CreateBug(data): Observable<Bug> {
  //   return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }


  // // PUT
  // UpdateBug(id, data): Observable<Bug> {
  //   return this.http.put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }

  // // DELETE
  // DeleteBug(id){
  //   return this.http.delete<Bug>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }



