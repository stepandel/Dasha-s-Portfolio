import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { MessageService } from '../../services/message.service';

import { Image } from '../../models/Image';
import { Inquiry } from '../../models/Inquiry';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.scss']
})
export class GalaryComponent implements OnInit {
  library: string;
  images: Image[];
  inquiry: Inquiry = {
    image: '',
    name: '',
    email: '',
    message: ''
  }

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    // scroll to bottom
    window.scrollTo({ left: 0, top: 2000, behavior:'smooth'});

    // get the library name from url
    this.library = this.route.snapshot.url[0].path;

    // extract images from firebase
    this.imageService.getImageData(this.library).subscribe(res => {
      this.images = res;

      for (let image of this.images){
        this.imageService.getImages(this.library, image.img).subscribe(res => {
          image.url = res;
        });
      }
    });


  }

  getImage(name: string){
    this.inquiry.image = name;
  }

  onSubmit({value, valid}: {value: Inquiry, valid: boolean}){
    console.log(value);
    if(valid){
      this.messageService.newInquiry(value);
    }
    
  }
}
