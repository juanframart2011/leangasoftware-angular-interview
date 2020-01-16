import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com';
    constructor( private http:HttpClient ){}

    geCommentPost(id:number){

        return this.http.get(`${this.url}/posts/${id}/comments/`).pipe(
            map( (resp:any) => {
                return resp;
            })
        );
    }

    getDetailPost(id:string){

        return this.http.get(`${this.url}/posts/${id}`).pipe(
            map( (resp:any) => {
                return resp;
            })
        );
    }

    getPost(){

        return this.http.get(`${this.url}/posts`).pipe(
            map( (resp:any) => {
                return resp;
            })
        );
    }
}