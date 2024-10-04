// import { Injectable } from "@angular/core";
// import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
// import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
// import { environment } from "../../environments/environment";

// @Injectable({ providedIn: "root" })
// export class CrudService {
// 	private apiURL = environment.apiURL;
// 	langSubject = new BehaviorSubject<any>(null);

// 	constructor(private http: HttpClient) {}

// 	fetchRecords(collection: string, options?: any): Observable<any> {
// 		let populate = options?.populate != undefined ? `&${options?.populate}` : ``;
// 		let filters = options?.filters != undefined ? `&${options?.filters}` : ``;
// 		let pagination = ``; //`&pagination[page]=${options.page}&pagination[pageSize]=${options.pageSize}`;
// 		let locale = `&locale=${localStorage.getItem("lang")}`;
// 		return this.http.get<any>(`${this.apiURL}/${collection}?q${populate}${filters}${pagination}${locale}`);
// 	}

// 	addRecord(collection: string, record: any): Observable<any> {
// 		return this.http.post(`${this.apiURL}/${collection}`, record).pipe(catchError(this.handleError));
// 	}

// 	updateRecord(collection: string, record: any): Observable<any> {
// 		return this.http.put(`${this.apiURL}/${collection}/${record.id}`, record).pipe(catchError(this.handleError));
// 	}

// 	deleteRecord(collection: string, id: number): Observable<any> {
// 		return this.http.delete(`${this.apiURL}/${collection}/${id}`).pipe(catchError(this.handleError));
// 	}

// 	handleError(errorResponse: HttpErrorResponse) {
// 		// let errorMessage = "An error occurred";
// 		// if (errorResponse.error && errorResponse.error.error) {
// 		// 	errorMessage = errorResponse.error.error;
// 		// }
// 		// console.error(errorMessage);
// 		console.log(errorResponse);
// 		return throwError(errorResponse);
// 	}
// }
