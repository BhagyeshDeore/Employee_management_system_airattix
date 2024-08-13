import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveDetail, User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:3000/users';
  private leaveDetailsApiUrl = 'http://localhost:3000/leaveDetails';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  updateUser(id: string, userData: Partial<any>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, userData);
  }
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  submitLeaveApplication(leaveData: LeaveDetail): Observable<LeaveDetail> {
    return this.http.post<LeaveDetail>(this.leaveDetailsApiUrl, leaveData);
  }

  getLeaveApplications(): Observable<LeaveDetail[]> {
    return this.http.get<LeaveDetail[]>(this.leaveDetailsApiUrl);
  }

  getLeaveApplication(id: string): Observable<LeaveDetail> {
    return this.http.get<LeaveDetail>(`${this.leaveDetailsApiUrl}/${id}`);
  }
  
}
