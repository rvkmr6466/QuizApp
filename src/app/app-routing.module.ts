import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
	{
		path : 'register', 
		component : RegisterComponent,
	},
	{
		path : 'quiz', 
		component : QuizComponent,
	},
	{
		path : 'result', 
		component : ResultComponent,
	},
	{
		path : 'auth', 						
		component:AuthComponent
	},
	{
		path : '', 						//when any other path is selected
		redirectTo : '/register', 
		pathMatch : 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
