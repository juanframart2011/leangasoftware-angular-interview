import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

    description:string = "Post Description example";
    image:string = "https://s.hs-data.com/bilder/spieler/gross/26622.jpg";
    post:any;
    title:string = "Post Title example";

    constructor( private router:ActivatedRoute, private postService:PostService){

        const id = this.router.snapshot.paramMap.get( 'id' );
        this.postService.getDetailPost( id ).subscribe( resp =>{
            
            this.post = resp;
        });
    }

    ngOnInit() {}
}