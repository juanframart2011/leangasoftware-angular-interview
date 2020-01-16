import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor( private router:ActivatedRoute){

        this.post = this.router.snapshot.paramMap.get( 'id' );
        console.log( this.post );
    }

    ngOnInit() {}
}