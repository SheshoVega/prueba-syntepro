import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})

export class PostsService {

	private apiRoot: string = 'https://jsonplaceholder.typicode.com/posts';
  	constructor(private http: HttpClient) {}

  	getPosts() {
		return this.http.get<any[]>(this.apiRoot);
	}

	getPost(id:string):Observable<any> {
		let apiUrl = `${this.apiRoot}/${id}`;
		return this.http.get<any>(apiUrl);
	}
}
