import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  order = this.randomBoard();

  randomBoard() {
    var order: Array<boolean> = [];
    for(var i=0; i<10; i++) {
      order.push(Math.random() >= 0.5);
    }
    console.log(order);
    return order;
  }

  switch(index) {
    if (this.order[index] == false) {
      this.order[index] = true;
    }
    else {
      this.order[index] = false;
    }
    console.log(this.order);
  }
}
