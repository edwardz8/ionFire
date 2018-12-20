import { Teams } from './../shared/models/teams';
import { Component, OnInit } from '@angular/core';
import { SkatersService } from '../services/skaters.service';
import { Rosters } from '../shared/models/rosters';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  teams: Teams;
  rosters: Rosters;

  constructor(private skatersService: SkatersService) { }

  ngOnInit() {
    this.skatersService.getRosters().subscribe(res => {
      this.teams = res;
    })
  }
}
