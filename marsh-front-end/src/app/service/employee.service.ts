import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EMP_URL = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {
  }

  getEmployeeList() {
    return this.http.get(this.EMP_URL);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.EMP_URL}/${id}`);
  }

  addEmployee(data) {
    return this.http.post(this.EMP_URL, data);
  }

  updateEmployee(id, data) {
    return this.http.put(`${this.EMP_URL}/${id}`, data);
  }

  getEmployeeByID(id) {
    return this.http.get(`${this.EMP_URL}/${id}`);
  }
}
