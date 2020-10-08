import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../../assets/particle-config';

declare let particlesJS: any; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  
    public ngOnInit(): void {
      this.invokeParticles();
    }
  
    public invokeParticles(): void {
      particlesJS('particles-js', ParticlesConfig, function() {});
    }
  }
