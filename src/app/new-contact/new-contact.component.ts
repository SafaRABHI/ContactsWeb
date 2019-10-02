import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/mode.contact';
import { ContactsService } from 'src/services/contacts';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

contact:Contact=new Contact();
mode:number=1;
  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }
  saveContact() {
    //console.log(this.contact);
    this.contactsService.saveContact(this.contact)
    .subscribe((res : any)=>{       
      //console.log(res)
      this.contact=res;
      this.mode=2;
    });

     
  }

}
