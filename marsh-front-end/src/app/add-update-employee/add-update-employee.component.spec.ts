import {ComponentFixture, TestBed} from '@angular/core/testing'

import {AddUpdateEmployeeComponent} from './add-update-employee.component'
import {ReactiveFormsModule} from '@angular/forms'
import {EmployeeService} from '../service/employee.service'
import {of} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

describe('AddUpdateEmployeeComponent', () => {
  let component: AddUpdateEmployeeComponent
  let fixture: ComponentFixture<AddUpdateEmployeeComponent>
  let appService: jasmine.SpyObj<EmployeeService>


  const data = {
    id: 1,
    name: 'Aaron',
    address: 'Chicago IL',
    mobile: '11111111',
    email: 'test1@test1.com'
  }

  beforeEach(async () => {
    appService = jasmine.createSpyObj('appService', ['getEmployeeByID', 'updateEmployee'])
    appService.getEmployeeByID.and.returnValue(of(data))
    appService.updateEmployee.and.returnValue(of(data))

    await TestBed.configureTestingModule({
      declarations: [AddUpdateEmployeeComponent],
      providers: [ // providers
        {provide: EmployeeService, useValue: appService},
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {params: of({id: 123})}
          }
        }
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateEmployeeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
