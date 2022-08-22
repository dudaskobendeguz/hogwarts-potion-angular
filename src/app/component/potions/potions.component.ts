import { Component, OnInit } from '@angular/core';
import {Potion} from "../../model/potion";
import {MessageService} from "../../service/message/message.service";
import {PotionService} from "../../service/potion/potion.service";

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit {
  potions: Potion[] = [];

  constructor(
    private messageService: MessageService,
    private potionService: PotionService
  ) { }

  ngOnInit(): void {
    this.getPotions();
  }

  private getPotions() {
    this.potionService.getPotions()
      .subscribe((potions) => {
        this.potions = potions;
        this.messageService.add(PotionsComponent.name, 'getPotions: potions fetched');
      })
  }
}
