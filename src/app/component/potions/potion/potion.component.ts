import {Component, Input, OnInit} from '@angular/core';
import {Potion} from "../../../model/potion";

@Component({
  selector: 'app-potion',
  templateUrl: './potion.component.html',
  styleUrls: ['./potion.component.css']
})
export class PotionComponent implements OnInit {
  @Input() potion?: Potion;

  constructor() { }

  ngOnInit(): void {
  }

}
