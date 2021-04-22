import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button class='btn btn-primary' (click)="handleclick()">Click me</button> `
})
export class AppChildComponent {

    handleclick() {

        console.log('hey I am  clicked in child');
    }
}