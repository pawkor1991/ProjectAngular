import { Component, OnInit } from '@angular/core';
import { Kluby } from './../kluby';
import { KLUBY } from './../mock-kluby';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-zagraniczne',
  templateUrl: './zagraniczne.component.html',
  styleUrls: ['./zagraniczne.component.scss']
})
export class ZagraniczneComponent implements OnInit {
 kluby : Kluby[]=[];
  constructor(private clubsService: ClubsService) { }

  ngOnInit(): void {
    this.getClubs();
  }

  getClubs():void {
    this.clubsService.getClubs().subscribe(kluby => this.kluby = kluby);
    //this.kluby = this.clubsService.getClubs();
    
  }
  

}

