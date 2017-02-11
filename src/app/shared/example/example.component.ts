import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'crds-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit {

  private iframeSrc: SafeResourceUrl;
  private manifest: any;
  private rootPath: string = '/examples/'
  private path: string;
  private entry: string;
  private files: Array<any>;
  private markup: string;
  private currentFile: string;

  @Input() id: string;
  @Input() width: string = '100%';
  @Input() height: string = '100';

  constructor(private sanitizer: DomSanitizer, private http: Http) {
  }

  ngOnInit() {
    this.path = `${this.rootPath}${this.id}/`
    this.markup = '<html></html>';
    this.http.get(`${this.path}manifest.json`).subscribe(this.parseManifest.bind(this));
  }

  parseManifest(res: Response) {
    this.manifest = res.json();
    this.files = this.manifest.files;
    this.loadResource(this.manifest.entry);

    let url = `${this.path}${this.manifest.entry}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getMarkup(url) {
    this.http.get(url).subscribe((data: Response) => {
      this.markup = data['_body'];
    });
  }

  loadResource(path) {
    let url = `${this.path}${path}`;
    this.getMarkup(url);
  }

  onClick(file) {
    this.loadResource(file);
    return false;
  }
}
