import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

const URL = 'http://localhost:8080/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //service functions
  //getAll users
  getAll(): Observable<User[]> {
    return this.http.get(URL+'/') as Observable<User[]>;
  }
  //get by ID
  getById(id): Observable<User> {
    return this.http.get(URL+'/'+id) as Observable<User>;
  }
  //create user and return a single user
  create(user: User): Observable<User> {
    return this.http.post(URL+'/', user) as Observable<User>;
  }
   //update (edit) user and return an instance of user
   update(user: User): Observable<User> {
    return this.http.put(URL+'/', user) as Observable<User>;
  }
     //delete user and return an instance of user
     delete(id): Observable<User> {
      return this.http.delete(URL+'/'+id) as Observable<User>;
    }
  

}