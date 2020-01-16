import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';

@Component({
selector: 'app-comment',
templateUrl: './comment.component.html',
styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    @Output() dateEmitter: EventEmitter<Date> = new EventEmitter<Date>();

    @Input() post:number = null;
    comments:any[];
    constructor( private postService:PostService ){}

    emitir(){
        let dateCurrent = new Date();
        console.log("dateCurrent", dateCurrent);
        this.dateEmitter.emit(dateCurrent);
    }

    ngOnInit(){

        const id = this.post;
        this.postService.geCommentPost( id ).subscribe( resp =>{
            
            this.comments = resp;
        });
    }
}