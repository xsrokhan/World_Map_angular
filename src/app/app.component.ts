import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SVGComponent } from './svg.component';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SVGComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private dataSharingService: DataSharingService) {}

  res_data: any;

  ngOnInit() {
    // Subscribe to the event in ngOnInit
    this.dataSharingService.newItemEvent.subscribe((data) => {
      // Handle the emitted data here
      this.setData(data);
    });
  }

  setData(data: any) {
    this.res_data = data;
    console.log('Received data in AppComponent:', data);
  }

}
