import { Component } from '@angular/core';

import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    UserInputComponent,
    InvestmentResultsComponent,
    HeaderComponent
  ]
})
export class AppComponent {}
