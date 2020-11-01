import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import {EmployeeService} from '../service/employee.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-add-update-employee',
  templateUrl: './add-update-employee.component.html',
  styleUrls: ['./add-update-employee.component.css']
})
export class AddUpdateEmployeeComponent implements OnInit {
  flag: boolean
  empId: string

  employeeFormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private appService: EmployeeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.empId = this.activatedRoute.snapshot.params.id
    if (this.empId) {
      this.appService.getEmployeeByID(this.empId).subscribe((result) => {
        this.employeeFormGroup = new FormGroup({
          name: new FormControl(result['name']),
          address: new FormControl(result['address']),
          mobile: new FormControl(result['mobile']),
          email: new FormControl(result['email'])
        })
      })
    }
  }

  addEmployee() {
    if (this.empId) {
      this.appService.updateEmployee(this.empId, this.employeeFormGroup.value).subscribe((result) => {
        this.flag = true
        this.employeeFormGroup.reset({})
      })
    } else {
      this.appService.addEmployee(this.employeeFormGroup.value).subscribe((result) => {
        this.flag = true
        this.employeeFormGroup.reset({})
      })
    }
  }

}
