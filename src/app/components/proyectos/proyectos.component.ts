import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  slides = [
    {
      img: 'https://via.placeholder.com/600.png/09f/fff',
      titulo: 'Proyecto 1',
      tecno: '#tecno_1 #tecno_2',
      link: '',
    },
    {
      img: 'https://via.placeholder.com/600.png/09f/fff',
      titulo: 'Proyecto 2',
      link: '',
      tecno: '#tecno_1 #tecno_2',
    },
    {
      img: 'https://via.placeholder.com/600.png/09f/fff',
      titulo: 'Proyecto 3',
      link: '',
      tecno: '#tecno_1 #tecno_2',
    },
    {
      img: 'https://via.placeholder.com/600.png/09f/fff',
      titulo: 'Proyecto 4',
      link: '',
      tecno: '#tecno_1 #tecno_2',
    },
  ];
  slideConfig = {
    slidesToShow: 3,
    autoplay: true,
    touchmove: true,
    arrows: false,  
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
