import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrmEventsService } from 'src/app/services/crm-events.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  id: number;
  registryMovieWatched;
  goBackLink: string;

  constructor(
    private route: ActivatedRoute,
    private crmEvents: CrmEventsService,
  ) {
    const movieId = this.route.snapshot.paramMap.get('movie');
    this.goBackLink = '/filme/' + movieId;
    this.id = Number(movieId);
    this.registryMovieWatched = (id: number) => this.crmEvents.post('watched', id);
  }

  ngOnInit() {
    this.registryMovieWatched(this.id);
  }

}
