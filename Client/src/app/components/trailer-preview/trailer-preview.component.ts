import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrailerService } from '../../services/trailer.service';
import { Trailer } from '../../models/trailer.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer-preview',
  templateUrl: './trailer-preview.component.html',
  styleUrls: ['./trailer-preview.component.css'],
})
export class TrailerPreviewComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private TrailerService: TrailerService,
    private Sanatizer: DomSanitizer
  ) {}
  id: string = '';
  trailer: Trailer | any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.TrailerService.getTrailer(this.id).subscribe(
        (res) => {
          this.trailer = res;
        },
        (err) => console.log(err)
      );
    });
  }

  getVideoIframe(url: string) {
    let video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = results === null ? url : results[1];

    return this.Sanatizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + video
    );
  }
}
