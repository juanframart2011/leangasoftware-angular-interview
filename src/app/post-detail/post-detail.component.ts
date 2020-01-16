import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

    @ViewChild('dateEmitter', {static: false}) dateEmitter:CommentComponent;
    /*@ViewChild(CommentComponent)
    private dateEmitter: CommentComponent;*/

    description:string = "Post Description example";
    fecha:string = null;
    post:any;
    title:string = "Post Title example";
    dateComment:Date = null;

    constructor(
                    private elem: ElementRef,
                    private router:ActivatedRoute,
                    private postService:PostService
                ){}

    ngOnInit(){
        const id = this.router.snapshot.paramMap.get( 'id' );
        this.postService.getDetailPost( id ).subscribe( resp =>{
            
            this.post = resp;
        });
    }

    onGetDate( dateData:any ){
        
        this.dateComment = dateData;
    }
}