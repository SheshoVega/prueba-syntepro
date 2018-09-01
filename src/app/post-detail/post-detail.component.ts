import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

//RXJS operators
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

	paramsSub: Subscription;
	post: any;
	isEditing: boolean;
	message:string;
	errors:boolean;

	constructor(private route: ActivatedRoute, private postService: PostsService) { }

	ngOnInit() {

		this.isEditing = false;

		this.paramsSub = this.route.params.pipe(
			map(params => params['id'])
		).subscribe(projectId => {
			this.postService.getPost(projectId).subscribe(
				(data: any) => {
					console.log(data);
					this.post = data;
				},
				(err: HttpErrorResponse) => {
					if (err.error instanceof Error) {
						console.log('Client-Side error:', err.error.message);
					} else {
						console.log(`Backend error: codigo [ ${err.status} ], error: [ ${err.error} ]`);
					}
				}
			);
		});

	}

	ngOnDestroy() {

		this.paramsSub.unsubscribe();

	}

	toggleEdit() {

		this.isEditing = !this.isEditing;

	}

	getPostDataFromForm(data:any) {

		console.log(data);
		if(data) {
			
			this.toggleEdit();
			this.post = data;
			this.errors = false;
			this.message = 'Post Actualizado Exitosamente! ;-)';
			setTimeout(()=>{
				this.message = '';
			}, 3000);
		}
		
	}

}
