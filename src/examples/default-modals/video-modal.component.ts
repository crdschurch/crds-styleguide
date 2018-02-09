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
  public url: string;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.url = `https://www.youtube.com/embed/${this.videoId}`;
    this.setVideoSrc();
  }

  public setVideoSrc() {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  public clearVideoSrc() {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
}
