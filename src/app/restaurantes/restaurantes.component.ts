import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Restaurante } from './restaurante/restaurante.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from './restaurantes.service';
import { from } from 'rxjs';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {

  searchBarState = 'hidden';
  restaurantes: Restaurante[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantesService: RestaurantesService,
              private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm =>
        this.restaurantesService
        .restaurantesSearch( searchTerm )
        .pipe(
          catchError(error => from([]))))
    ).subscribe(restaurantes => this.restaurantes = restaurantes)

    this.restaurantesService.restaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
