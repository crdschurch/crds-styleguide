import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-modal',
  templateUrl: './video-modal.component.html'
})
export class VideoModalComponent implements OnInit {

  @Input() videoId: number;
  @Input() buttonText: string;

  public videoSrc: any;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    let url = `https://www.youtube.com/embed/${this.videoId}`;
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
