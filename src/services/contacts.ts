import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Contact } from 'src/model/mode.contact';

@Injectable()
export class ContactsService{
constructor(private http:HttpClient) {

}
getContacts(motCle:String,page:number,size:number){
return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)

}

getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id)
    
    }

saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact)


}
updateContact(contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
}
deleteContact(id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id)



}
}
/* https://www.youtube.com/watch?v=ONuxoUy1ego */