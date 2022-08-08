import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export enum ScreenSize {
  DesktopXL = 1824,
  DesktopL = 1440,
  DesktopM = 1280,
  Desktop = 1024,
  DesktopS = 850,
  Tablet = 768,
  Phone = 414
}

@Injectable()
export class ScreenService {
  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView as Window;
  }

  get desktopS(): boolean {
    return this.screenWidth > ScreenSize.DesktopS;
  }

  protected get screenWidth(): number {
    return this.window.innerWidth;
  }
}
