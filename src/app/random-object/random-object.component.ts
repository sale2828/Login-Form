import { ActivatedRoute } from '@angular/router';
import { ObjectService } from '../services/object.service';
import { Component, OnInit } from '@angular/core';
import { Object } from 'src/helpers/object';

@Component({
  selector: 'app-random-object',
  templateUrl: './random-object.component.html',
  styleUrls: ['./random-object.component.css']
})
export class RandomObjectComponent implements OnInit {

  objects: Object[] = [];

  constructor(
    private objectService: ObjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getObjects();
  }

  getObjects(): void {
    this.objectService.getObjects().subscribe(objects => this.objects = objects);
  }

}
