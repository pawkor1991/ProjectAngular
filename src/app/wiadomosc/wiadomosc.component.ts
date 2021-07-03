import { Component, OnInit } from '@angular/core';
import { WiadomosciService } from '../wiadomosci.service';
@Component({
  selector: 'app-wiadomosc',
  templateUrl: './wiadomosc.component.html',
  styleUrls: ['./wiadomosc.component.scss']
})
export class WiadomoscComponent implements OnInit {

  constructor(public wiadomoscService:WiadomosciService) { }

  ngOnInit(): void {
  }

}
