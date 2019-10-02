import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/mode.contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/services/contacts';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
contact:Contact=new Contact();
idContact:number;
  constructor(public activatedRoute:ActivatedRoute,
     public contactsService:ContactsService,
     public router:Router
     ) { 
    this.idContact=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
this.contactsService.getContact(this.idContact)
.subscribe((res : any)=>{       
  this.contact=res; 
});


  }

  updateContact(){
    this.contactsService.updateContact(this.contact)
    .subscribe((res : any)=>{       
      console.log(res); 
      alert("Mise à jour effectuée");
      this.router.navigate(['contacts']);
    });
    

  }

}
