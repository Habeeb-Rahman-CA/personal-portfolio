import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollY = new BehaviorSubject<number>(0);
  scrollY$ = this.scrollY.asObservable();

  updateScrollY(value: number) {
    this.scrollY.next(value);
  }
}