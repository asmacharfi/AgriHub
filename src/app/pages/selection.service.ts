// selection.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selectedItemIndex: number;

  constructor() { }
}
