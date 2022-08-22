import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(classname: String, message: string): void {
    this.messages.push(`__[${classname}]__: ${message}`);
  }

  clear(): void {
    this.messages = [];
  }

  hasMessage(): boolean {
    return this.messages.length > 0;
  }
}
