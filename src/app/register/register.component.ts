import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { QuizService } from '../shared/quiz.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	// emailPattern = '^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$';
	genders = ['male', 'female'];
	signupForm: FormGroup;

	constructor(private service: QuizService,
		) { }

	ngOnInit(): void {
		this.signupForm = new FormGroup({
			//dont call required function, its just want reference and will call the function when it will detect changes
			'userData': new FormGroup({
				'username': new FormControl(null, Validators.required), 
				'email': new FormControl(null, [Validators.required, Validators.email])
			}),
			'gender': new FormControl('male'),
			'hobbies': new FormArray([])
		});
	}

	onSubmit() {
		console.log(this.signupForm);	
	}

	onAddHobby() {
		const hobbiesControl = new FormControl(null, Validators.required);
		(<FormArray>this.signupForm.get('hobbies')).push(hobbiesControl); 

	}

	login(){
		this.service.login();
	}
}
