import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

	isLoginMode = true;
	
	constructor(private authService: AuthService) { }

	ngOnInit(): void {
	}

	switchMode() {
		this.isLoginMode = !this.isLoginMode;
	}
	/**
	 * @author Ravi Kumar
	 * @param form 
	 * @description onSubmit the login or signup button
	 */
	onSubmit(form: NgForm) {
		if(!form.valid){
			return;
		}
		const email = form.value.email;
		const password = form.value.password;
		let authObservable: Observable<AuthResponseData>;
		if(this.isLoginMode) {
			authObservable = this.authService.login(email, password);
		}
		else {
			authObservable = this.authService.signUp(email, password);
		}

		authObservable.subscribe( 
			(response) => this.responseData(response),
			(error) => this.responseError(error)
			);

		form.reset();
	}

	responseData(response) {
		console.log("responseData=", response);
	}

	responseError(error) {
		console.log("responseError=", error);

	}

}
