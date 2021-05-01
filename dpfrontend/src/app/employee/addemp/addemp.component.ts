import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  flag=0;

  CountryList = [
    {CountryId:1, Name:"India"},
    {CountryId:2, Name:"Australia"},
    {CountryId:3, Name:"USA"},
    {CountryId:4, Name:"Japan"},
    {CountryId:5, Name:"New Zealand"},
    {CountryId:6, Name:"Canada"},
    {CountryId:7, Name:"Malaysia"},
    {CountryId:8, Name:"Singapore"},
    {CountryId:9, Name:"Germany"},
    {CountryId:10, Name:"UK"}
  ]
  StateList = [
    {StateId:1, Name:"Maharashtra"},
    {StateId:2, Name:"Gujarat"},
    {StateId:3, Name:"Goa"},
    {StateId:4, Name:"Karnataka"},
    {StateId:5, Name:"Himachal Pradesh"},
    {StateId:6, Name:"Jammu and Kashmir"},
    {StateId:7, Name:"California"},
    {StateId:8, Name:"Rajasthan"}
  ]
  CityList = [
    {CityId:1, Name:"Pune"},
    {CityId:2, Name:"Mumbai"},
    {CityId:3, Name:"Los Angeles"},
    {CityId:4, Name:"Bengaluru"},
    {CityId:5, Name:"New Delhi"},
    {CityId:6, Name:"New York"},
    {CityId:7, Name:"Seattle"}
  ]
   static emp1:any

  @Input() emp:any;
  EmployeeId:string;
  Name:string;
  Gender:string;
  Address:string;
  Phone:string;
  Country:string;
  State:string;
  City:string;

  upEmployeeId:string;
  upName:string;
  upGender:string;
  upAddress:string;
  upPhone:string;
  upCountry:string;
  upState:string;
  upCity:string;

  ngOnInit(): void {
    //this.refreshCityList();
    //this.refreshCountryList();
    //this.refreshStateList();
    //alert("Countries:"+this.CountryList.length.toString())
    this.Name="";
  this.Gender="";
  this.Address="";
  this.Phone="";
  this.Country="";
  this.State="";
  this.City="";
  }

   static initializeEmpUpdate(emp2:any){
    this.emp1 = emp2;
  }

  emp3 = AddEmpComponent.emp1;

  checkValidations(){
    if(((this.Name=="") || (this.Gender=="") || (this.Address=="") || (this.Phone=="") || (this.Country=="") || (this.City=="") || (this.State==""))){
      this.flag=1;
     
      alert("Please fill all the fields in the required format!!");
      return;
    }
    else{
      if((!(/^ [A-Za-z]+$/.test(this.Name)))){
        alert("Please enter proper Name!!");
        return;}
      if((!(/[789][0-9]/.test(this.Phone))) || (this.Phone.length!=10)){
        alert("Please enter proper 10-digit Phone Number!!");
        return;}
      else{
      this.addEmployee();}
    }
    
  }

  addEmployee(){
    var val = { //EmployeeId:this.emp3.EmployeeId,
                Name:this.Name,
                Gender:this.Gender,
                Address:this.Address,
                Phone:this.Phone,
                Country:this.Country,
                State:this.State,
                City:this.City
                 };

            
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    if(this.Name==""){this.upName = this.emp3.Name;}
    else {
      if((!(/^[A-Za-z]+$/.test(this.Name))) && (this.Name!="")){
        alert("Please enter proper Name!!");
        return;}
      this.upName = this.Name;}
    if(this.Gender==""){this.upGender = this.emp3.Gender;}
    else {this.upGender = this.Gender;}
    if(this.Address==""){this.upAddress = this.emp3.Address;}
    else {this.upAddress = this.Address;}
    if(this.Phone==""){this.upPhone = this.emp3.Phone;}
    else {this.upPhone = this.Phone;}
    if(this.Country==""){this.upCountry = this.emp3.Country;}
    else {this.upCountry = this.Country;}
    if(this.State==""){this.upState = this.emp3.State;}
    else {this.upState = this.State;}
    if(this.City==""){this.upCity = this.emp3.City;}
    else {this.upCity = this.City;}

    

    if((!(/[789][0-9]/.test(this.upPhone))) || (this.upPhone.length!=10)){
      alert("Please enter proper 10-digit Phone Number!!");
      return;}

    var val = { EmployeeId:this.emp3.EmployeeId,
     Name:this.upName,
      Gender:this.upGender,
      Address:this.upAddress,
      Phone:this.upPhone,
      Country:this.upCountry,
      State:this.upState,
      City:this.upCity };
      console.log(val);
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    },
    error => {
      alert("Employee ID cannot be edited");
    }
    );
  }

  refreshCountryList(){
    this.service.getCountryList().subscribe(data=>{
      this.CountryList=data;
    });
  }

  refreshStateList(){
    this.service.getStateList().subscribe(data=>{
      this.StateList=data;
    });
  }

  refreshCityList(){
    this.service.getCityList().subscribe(data=>{
      this.CityList=data;
    });
  }



}

