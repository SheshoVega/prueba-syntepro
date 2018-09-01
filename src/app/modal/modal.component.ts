import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	@Input() isEditing: boolean;
	@Output() action = new EventEmitter<any>();
	operation:string;

	constructor() { }

	ngOnInit() {

		if(this.isEditing) {

			this.operation = 'actualizar';

		} else {

			this.operation = 'crear';

		}

	}

	modalAction(action:boolean){
			
		this.action.emit({ continue: action});

	}

}
