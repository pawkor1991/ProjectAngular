import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kluby } from './kluby';
import { KLUBY } from './mock-kluby';
import { WiadomosciService } from './wiadomosci.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private wiadomoscService:WiadomosciService,private firestore:AngularFirestore) { }

  getClubs(): Observable<Kluby[]> {
    
  const clubs = this.firestore.collection<Kluby>('kluby').valueChanges({

  });

  
  this.wiadomoscService.add('ClubsService pobrał wiadomosci');
  return clubs;
  }
}



