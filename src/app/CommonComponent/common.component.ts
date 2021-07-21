import { Directive } from "@angular/core";
import { Subject } from "rxjs";


@Directive({
  selector: '[appHighlight]'
})
export class CommonComponent {


  subIfTrue: Subject<any> = new Subject<any>();

  unSubscribe() {
    this.subIfTrue.next();
    this.subIfTrue.complete();
    this.subIfTrue = new Subject<any>();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unSubscribe();
  }

}
