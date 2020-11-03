import {Component, OnInit} from '@angular/core'
import {EmployeeService} from '../service/employee.service'

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  public employees: any

  constructor(private appService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  deleteEmployee(id: any) {
    this.appService.deleteEmployee(id).subscribe((result) => {
      this.getEmployeeList()
      console.log('Employee Deleted.') // fetch employee list again.
    })
  }

  getEmployeeList() {
    this.appService.getEmployeeList().subscribe((result) => {
      this.employees = result
    })
  }
}
