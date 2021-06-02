import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';

@Injectable({providedIn: 'root'})
export class CustomerService {

    constructor(private http: HttpClient) {
    }

    getCustomersSmall() {
        return this.http.get<any>('assets/customers-smal.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => {
                return data;
            });
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => {
                return data;
            });
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => {
                return data;
            });
    }

    getCustomersXLarge() {
        return this.http.get<any>('assets/customers-xlarge.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => {
                return data;
            });
    }

}