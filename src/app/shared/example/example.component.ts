import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

let Prism = require('prismjs');
var path = require('path');

@Component({
  selector: 'crds-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit {

  private el: Element;
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

  constructor(private sanitizer: DomSanitizer, private http: Http, private elementRef: ElementRef) {
    this.el = <Element>this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.path = `${this.rootPath}${this.id}/`
    this.markup = '<html></html>';
    this.http.get(`${this.path}manifest.json`).subscribe(this.parseManifest.bind(this));
  }

  addSyntaxHighlighting(language) {
    let els = this.el.getElementsByTagName('pre')
    for(let i = 0; i < els.length; i++) {
      this.markup = Prism.highlight(this.markup, Prism.languages[language]);
    }
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
      let filetype;
      switch(path.extname(data.url)) {
        case '.css':
          filetype = 'css';
          break;
        case '.js':
          filetype = 'javascript'
          break;
        default:
          filetype = 'markup';
      }
      this.addSyntaxHighlighting(filetype);
    });
  }

  loadResource(path) {
    this.manifest['active'] = path;
    let url = `${this.path}${path}`;
    this.getMarkup(url);
  }

  onClick(file) {
    this.loadResource(file);
    return false;
  }
}
