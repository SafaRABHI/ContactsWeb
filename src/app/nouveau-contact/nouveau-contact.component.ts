import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/services/contacts';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    //console.log(dataForm);
    this.contactsService.saveContact(dataForm)
    .subscribe((res : any)=>{       
      console.log(res)  
    });


  }


}
