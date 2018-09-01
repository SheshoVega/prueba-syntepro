import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() isEditing:boolean;
	@Input() post:any;
	postForm: FormGroup;
	showModal:boolean;

	constructor(private formBuilder: FormBuilder, private projectsService: PostsService) { }

	ngOnInit() {
		// console.log(this.post);

		let titleDefault = '';
		let bodyDefault = '';

		if(this.isEditing) {

			titleDefault = this.post.title;
			bodyDefault = this.post.body;

		}

		this.postForm = this.formBuilder.group({
			title: [titleDefault, Validators.required],
			body: [bodyDefault, Validators.required]
		});
		
	}

	toModal() {

		this.showModal = true;
		
	}


	savePost() {

		console.log('guardar');
		
	}

	updatePost() {
		console.log('actualizar');
	}

	resetForm() {

		this.postForm.reset();

	}

	getModalAction(data:any) {
		if(data.continue){
			
			this.showModal = false;

			if(this.isEditing) {

				this.updatePost();

			} else {

				this.savePost();

			}
			
		} else {
			
			this.showModal = false;			
			
		}
	}

}
