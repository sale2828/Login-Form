import { LoginFormComponent } from './../login-form/login-form.component';
import { ActivatedRoute } from '@angular/router';
import { ObjectService } from '../services/object.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Object } from '../object';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css'],
})
export class ObjectDetailComponent implements OnInit {

  object: Object | undefined;
  objectDetails: FormGroup;


  constructor(
    private objectService: ObjectService,
    private route: ActivatedRoute,
    private location: Location,

  ) {
    this.objectDetails = new FormGroup({
      objectName: new FormControl,
      objectId: new FormControl
    }
    ),
      this.objectDetails.valueChanges.subscribe(() => {
        window.addEventListener('beforeunload',
          (event) => {
            event.returnValue('You have unsaved data. Are you sure you want to reload?')
          });
      });
  }



  ngOnInit(): void {
    this.getObject();
  }

  getObject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.objectService
      .getObject(id)
      .subscribe((object) => (this.object = object));
  }

  goBack(): void {
    this.location.back();
  }

  canDeactivate(): boolean {
    return !this.objectDetails.dirty;
  }

}
