import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { person } from '../person';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

 peop:person[]=[]
 TITLE:string=" ";
 AUT:string=" ";
  
  constructor(private pe:ServiceService) { 
    
  }
  

  ngOnInit(): void {
    this.getapi()
  }
 getapi(){
   this.pe.getpeople().subscribe((a)=>this.peop=a)
 }
 
 additem(data:any){
   console.warn(data)
   this.pe.addpeople(data)
  }
  delete(id:Number){
    console.warn(id)
    this.pe.deleteitems(id)
  }
  update(num:any){
    console.warn(num)
    let ti=this.TITLE;
    let au=this.AUT;
    const obj= {id:num,title:ti,author:au}
    this.pe.updatecomp(num,obj)
    }
  
}
