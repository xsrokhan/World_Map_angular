import { Component } from '@angular/core';
import { MyApiService } from './my-api.service';
import { DataSharingService } from './data-sharing.service';


@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [],
  templateUrl: './svg.component.html',
  styleUrl: './app.component.css'
})
export class SVGComponent {

  constructor(private http: MyApiService, private dataSharingService: DataSharingService) {
    // Other initialization code can also go here
  }

  handleSvgClick(event: MouseEvent): void {
    
    const target = event.target as SVGPathElement;

    if (target.tagName === 'path') {
      const countryTitle = target.getAttribute('id')?.toLowerCase();

      document.querySelectorAll('svg path').forEach((path: any) => {
        path.classList.remove('selected');
      });

      target.classList.add('selected');

      this.http.getData(countryTitle).subscribe(data => this.dataSharingService.newItemEvent.emit(data))
    }
  }
}
