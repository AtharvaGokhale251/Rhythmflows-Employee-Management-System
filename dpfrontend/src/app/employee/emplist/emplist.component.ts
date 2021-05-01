import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {AddEmpComponent} from 'src/app/employee/addemp/addemp.component';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private service:SharedService ) { }
 
  EmployeeList:any=[];
  temp_emp: AddEmpComponent
  ModalTitle:string;
  add_update:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      Name:"",
      Gender:"",
      Address:"",
      Phone:"",
      Country:"",
      State:"",
      City:""
    }
    this.ModalTitle="Add Employee";
    this.add_update=true;
    AddEmpComponent.initializeEmpUpdate(this.emp);

  }

  editClick(item){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.add_update=true;
    AddEmpComponent.initializeEmpUpdate(item);
  }

  deleteClick(item){
    if(confirm('Do you really want to delete this entry?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.add_update=false;
    this.refreshEmpList();
  }
  
  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}

