import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ContactsService } from 'src/services/contacts';
import { Router } from '@angular/router';
import { Contact } from 'src/model/mode.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:String="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  constructor(public http:HttpClient,public contactservices:ContactsService,public router:Router){

  }
  //constructor(private http:HttpClient) { }

  ngOnInit() {
   
    }
    /*  this.contactservices.getContacts()
     .subscribe((res : any[])=>{
      this.pageContacts=res;
     });   */
  
doSearch(){  
  this.contactservices.getContacts(this.motCle,this.currentPage,this.size)
     .subscribe((res : any)=>{
      this.pageContacts=res;
      this.pages=new Array(res.totalPages);
      console.log(res);
     });
}

chercher(){
this.doSearch();
  
}
gotoPage(i:number){
this.currentPage=i;
this.doSearch();

}

onEditContact(id:number){
  this.router.navigate(['editContact',id]);
  

}
onDeleteContact(c:Contact){
  let confirm=window.confirm('Est vous sure ?');
  if(confirm==true){
  this.contactservices.deleteContact(c.id)
  .subscribe((res : any)=>{
    this.pageContacts.content.splice(
    this.pageContacts.content.indexOf(c),1
    );

   });
  }
}

}
