import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts:Any[];

    constructor( private postService: PostService ){

        this.postService.getPost().subscribe( resp =>{
            
            this.posts = resp;
        });
    }

    ngOnInit(){}
}