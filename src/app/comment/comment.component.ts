import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
selector: 'app-comment',
templateUrl: './comment.component.html',
styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    @Input() post:number = null;
    comments:any[];
    constructor( private postService:PostService ){}

    ngOnInit(){

        const id = this.post;
        this.postService.geCommentPost( id ).subscribe( resp =>{
            
            this.comments = resp;
        });
    }
}