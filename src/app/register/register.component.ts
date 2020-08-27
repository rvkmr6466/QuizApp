import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	emailPattern = '^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$';

	constructor() { }

	ngOnInit(): void {
	}

}
