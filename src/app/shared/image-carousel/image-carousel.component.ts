import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  @Input() slides;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
