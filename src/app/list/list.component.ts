import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {

	posts: Array<any>;

	constructor(private postsService: PostsService) {}

	ngOnInit() {
		this.getPosts();
	}

	getPosts(){

		this.postsService.getPosts().subscribe(
			(data: Array<any>) => {
				this.posts = data.slice(0, 5);	
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					console.log('Client-Side error:', err.error.message);
				} else {
					console.log(`Backend error: codigo [ ${err.status} ], error: [ ${err.error} ]`);
				}
			}
		);

	}
}
