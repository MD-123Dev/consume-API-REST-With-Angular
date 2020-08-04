import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url).map(response => response.json());
    }

    create(resourse) {
        return this.http.post(this.url, resourse)
            .map(response => response.json());
    }

    update(resourse) {
        return this.http.put(this.url + '/' + resourse.id, resourse)
            .map(response => response.json());
    }

    delete(resourse) {
        return this.http.delete(this.url + '/' + resourse.id)
            .map(response => response.json());
    }

}