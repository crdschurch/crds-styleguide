import { Component, Input, OnInit, AfterViewInit, AfterViewChecked, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

import { ThemeToggleSwitchService } from '../../directives/theme-toggle-switch/theme-toggle-switch.service';

let Prism = require('prismjs');
let path = require('path');
let entities = new (require('html-entities').Html5Entities)();
let Clipboard = require('clipboard');
let uuidv4 = require('uuid/v4');

import 'prismjs/components/prism-typescript';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'ddk-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit, AfterViewInit, AfterViewChecked {

  public clippableUUID: string;
  public clippableHTML: string;
  public clippableMoved = false;
  public iframeId: string;

  private el: Element;
  private iframeSrc: SafeResourceUrl;
  private manifest: any;
  private rootPath = '/examples/';
  private path: string;
  private entry: string;
  private files: Array<any>;
  private markup: string;
  private currentFile: string;
  private markupInline: boolean;
  private preformattedMarkup: string;

  @Input() id: string;
  @Input() width = '100%';
  @Input() height = '100';
  @ViewChild('contentRef') contentRef;

  constructor(private sanitizer: DomSanitizer,
              private http: Http,
              private elementRef: ElementRef,
              private toastr: ToastsManager,
              private vRef: ViewContainerRef,
              private toggleSwitchService: ThemeToggleSwitchService) {
    this.el = <Element>this.elementRef.nativeElement;
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    if (this.id !== undefined) {
      this.path = `${this.rootPath}${this.id}/`;
      this.markup = '<html></html>';
      this.http.get(`${this.path}manifest.json`).subscribe(this.parseManifest.bind(this));
    }
    this.iframeId = `iframe-example-${uuidv4()}`;

    this.toggleSwitchService.getState().subscribe(state => {
      const iframe = document.getElementById(this.iframeId)
      if (iframe) {
        const iframeWindow = iframe['contentWindow'];
        const themeClass = state === 'on' ? 'dark-theme' : 'light-theme';
        iframeWindow.postMessage(themeClass, '*');
      }
    });
  }

  ngAfterViewChecked() {
    let el = this.contentRef.nativeElement;
    if (!el.getAttribute('data-processed')) {
      this.buildExample(el);
    }
  }

  ngAfterViewInit() {
    this.markupInline = this.contentRef.nativeElement.children.length > 0;
    if (this.markupInline) {
      let pre = this.contentRef.nativeElement.querySelector('pre');
      if (pre !== null) {
        this.preformattedMarkup = pre.innerHTML;
        pre.remove();
      }
    }
  }

  parseManifest(res: Response) {
    this.manifest = res.json();
    this.files = this.manifest.files;
    this.loadResource(this.files[0]);

    let url = `${this.path}${this.manifest.entry}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.initClippable();
  }

  getMarkup(url) {
    this.http.get(url).subscribe((data: Response) => {
      let filetype = this.getFileType(url);
      this.markup = data['_body'];
      this.clippableHTML = data['_body'];
      this.addSyntaxHighlighting(filetype);
      let el = document.getElementById('markup-' + this.clippableUUID);
      this.moveClippable(el);
    });
  }

  getFileType(url) {
    let filetype;
    switch (path.extname(url)) {
      case '.css':
        filetype = 'css';
        break;
      case '.js':
        filetype = 'javascript';
        break;
      case '.ts':
        filetype = 'typescript';
        break;
      default:
        filetype = 'markup';
    }
    return filetype;
  }

  addSyntaxHighlighting(language) {
    let els = this.el.getElementsByTagName('pre');
    for (let i = 0; i < els.length; i++) {
      this.markup = Prism.highlight(this.markup, Prism.languages[language]);
    }
  }

  loadResource(action) {
    this.manifest['active'] = action;
    let url = `${this.path}${action}`;
    this.getMarkup(url);
  }

  onClick(file) {
    this.loadResource(file);
    return false;
  }

  buildExample(el) {
    if (el.getAttribute('data-processed')) {
      return;
    }
    el.setAttribute('data-processed', 'true');
    if (el.children.length > 0) {
      let html = entities.decode(this.preformattedMarkup || el.innerHTML).replace(/^\n+|\n+$/g, '');
      this.clippableHTML = html;
      let node = document.createTextNode(html);
      let pre = document.createElement('pre');
          pre.classList.add('language-markup');
          pre.appendChild(node);
      let figure = document.createElement('figure');
          figure.classList.add('highlight');
          figure.appendChild(pre);
      this.insertAfter(figure, el);
      Prism.highlightElement(pre);
      this.initClippable();
      this.moveClippable(figure);
    }
  }

  private insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  private initClippable() {
    this.clippableUUID = 'clippable-' + uuidv4();
    let clippable = new Clipboard('#' + this.clippableUUID, {
      text: (trigger) => {
        return this.clippableHTML;
      }
    });

    clippable.on('success', (event) => {
      let options = { toastLife: 3000 };
      let message = 'Code copied to clipboard!';
      this.toastr.success(message, null, options);
    });
  }

  private moveClippable(el) {
    let clippable = document.getElementById(this.clippableUUID);
    if (clippable === null) {
      setTimeout(() => {
        this.moveClippable(el);
      }, 500);
      return;
    }
    el.appendChild(clippable);
    this.clippableMoved = true;
  }
}
