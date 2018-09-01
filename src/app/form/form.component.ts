import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
	message:string;
	errors:boolean;
	@Output() postData = new EventEmitter<any>();

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
		if(this.postForm.valid){

			this.errors = false;
			this.message = 'Post Creado Exitosamente! ;-)';
			this.resetForm();
			setTimeout(()=>{
				this.message = '';
			}, 3000);

		} else {
			this.errors = true;
			this.message = 'Todos los campos del formulario son requeridos :(';
			setTimeout(()=>{
				this.message = '';
			}, 3000)
		}
		
	}

	updatePost() {
		console.log('actualizar');
		if(this.postForm.valid){

			this.postData.emit(this.postForm.value);

			// this.errors = false;
			// this.message = 'Post Actualizado Exitosamente! ;-)';
			// this.resetForm();
			// setTimeout(()=>{
			// 	this.message = '';
			// }, 3000);

		} else {
			this.errors = true;
			this.message = 'Todos los campos del formulario son requeridos :(';
			setTimeout(()=>{
				this.message = '';
			}, 3000)
		}

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
