import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

interface registerResponse {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(email, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('/api/login', {
      email,
      password
    })
  }

  registerUser(firstname, lastname, email, text) {
    return this.http.post<registerResponse>('/api/register', {
      firstname,
      lastname,
      email,
      text
    })
  }

}