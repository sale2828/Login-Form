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


  object: Object | undefined;

  constructor(
    private objectService: ObjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getObject();
  }

  getObject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.objectService.getObject(id)
      .subscribe(object => this.object = object);
  }

}
