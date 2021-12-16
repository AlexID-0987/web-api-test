
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from './person';
import { Observable } from 'rxjs';
import { addit } from './addit';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url='http://localhost:3000/posts'
  pe:person[]=[]
  
  
  constructor(private http:HttpClient) { }

  getpeople():Observable<person[]>{
    return this.http.get<person[]>(this.url)
  }
  addpeople(data:any){
     this.http.post<person[]>(this.url,{id:data.id,title:data.tit,author:data.aut}).subscribe((a)=>{console.warn(this.pe)})
     
  }
  deleteitems(dataid:any){
    const ur=`${this.url}/${dataid}`;
    this.http.delete(ur).subscribe((rez)=>console.warn("Ok"))
  }
  updatecomp(idea:person,body:any){
  const ur=`${this.url}/${idea}`;
  return this.http.put<person[]>(ur,body)
  .subscribe((a)=>console.warn(a))
  }
  
}
