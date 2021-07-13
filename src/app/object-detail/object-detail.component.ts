import { ActivatedRoute } from '@angular/router';
import { ObjectService } from '../services/object.service';
import { Component, OnInit } from '@angular/core';
import { Object } from '../object';
import { Location } from '@angular/common';
import { ComponentCanDeactivate } from '../component-can-deactivate';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css'],
})
export class ObjectDetailComponent implements OnInit, ComponentCanDeactivate {
  isDirty = false;
  object: Object | undefined;

  constructor(
    private objectService: ObjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

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
    return !this.isDirty;
  }

  save() {
    this.isDirty = false;
  }
}
