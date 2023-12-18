import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Company } from "../entities/company";
import { StockValue } from "../entities/values";
import { ValuesByCompany } from "../entities/valuesbycompany";
import { Observable } from "rxjs";

@Injectable()
export class BackendService  {

    private BASE_URL = 'https://proyectopfcfunctions.azurewebsites.net/api'

    constructor(private http: HttpClient) {

    }

    getCompanies(): Observable<Company[]>{
        let endpoint = '/companies'
        let url = this.BASE_URL + endpoint
        return this.http.get<Company[]>(url)
    }

    getStockValues(): Observable<StockValue[]> {
        let endpoint = '/stockvalues'
        let url = this.BASE_URL + endpoint
        return this.http.get<StockValue[]>(url);
    }

    getValuesByCompany(): Observable<ValuesByCompany[]> {
        let endpoint = '/stockvalues/bycompany'
        let url = this.BASE_URL + endpoint
        return this.http.get<ValuesByCompany[]>(url)
    }

}