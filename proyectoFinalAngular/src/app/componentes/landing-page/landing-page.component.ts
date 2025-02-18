import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {  } from '@angular/router';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MaterialModule, RouterModule, MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

 
}
