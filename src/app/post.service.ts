import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com';
    constructor( private http:HttpClient ){}

    getPost(){

        return this.http.get(`${this.url}/posts`).pipe(
            map( (resp:any) => {
                return resp;
            })
        );
    }

    getDetailPost(id:number){

        return this.http.get(`${this.url}/posts/${id}`).pipe(
            map( (resp:any) => {
                return resp;
            })
        );
    }
}