import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

	login() {
	//implementation of login method
	this.http.post<Response>("https://quiz-app-fd10b.firebaseio.com/posts.json", {})
	.subscribe(
		(response) => {},
		(error) => {

		});  
	}

	/* 
	testLogin(postData : {title : string, content : string}) {
		//implementation of login method
		//also add json because of the requirement of the firebase
		this.http.post<Response>("https://quiz-app-fd10b.firebaseio.com/posts.json", postData ) 
		.subscribe(
			(response) => {},
			(error) => {
	
			});  
		} */
}
