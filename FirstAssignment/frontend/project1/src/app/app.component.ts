import { Component } from '@angular/core';
import { OperatorServiceService } from "./operator-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private operatorService: OperatorServiceService
  ) { }

  ngOnInit(): void {
    this.operatorService.getOperators().then(operator => {
      console.log(operator)
    })
  }
}
