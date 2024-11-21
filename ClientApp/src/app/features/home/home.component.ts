import { Component } from '@angular/core';
import { MatchInformationBoxComponent } from '../../shared/components/match-information-box/match-information-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatchInformationBoxComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
