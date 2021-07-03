import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-komentarze',
  templateUrl: './komentarze.component.html',
  styleUrls: ['./komentarze.component.scss']
})
export class KomentarzeComponent {

  newTask! :string;
  tasksList :Array<string> =[].sort();

  newNick! :string
  nicksList :Array<string> =[].sort();
  add(){
  this.tasksList.push(this.newTask);
  this.newTask =' ';
  console.log(this.tasksList);
  }

  remove(task:string){
    this.tasksList = this.tasksList.filter(e => e !== task);

  }

  
    
  };

  




