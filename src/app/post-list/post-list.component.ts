import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts:Any = [
        { id: 1, name: 'Post 1', description: 'Description post 1'},
        { id: 2, name: 'Post 2', description: 'Description post 2'},
        { id: 3, name: 'Post 3', description: 'Description post 3'},
        { id: 4, name: 'Post 4', description: 'Description post 4'},
        { id: 5, name: 'Post 5', description: 'Description post 5'},
        { id: 6, name: 'Post 6', description: 'Description post 6'},
        { id: 7, name: 'Post 7', description: 'Description post 7'},
        { id: 8, name: 'Post 8', description: 'Description post 8'},
        { id: 9, name: 'Post 9', description: 'Description post 9'},
        { id: 10, name: 'Post 10', description: 'Description post 10'}
    ]

    constructor() { }

    ngOnInit(){}
}