import { Component, OnInit } from '@angular/core';
import {Room} from "../../../model/room";
import {RoomService} from "../../../service/room/room.service";
import {MessageService} from "../../../service/message/message.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = []

  constructor(
    private roomService: RoomService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  private getRooms() {
    this.roomService.getRooms()
      .subscribe( (rooms) => {
        this.rooms = rooms;
        this.messageService.add(RoomService.name, 'getRooms: rooms fetched');
        }
      );
  }
}
