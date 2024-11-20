/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokemonListarComponent } from './pokemonListar.component';

describe('PokemonListarComponent', () => {
  let component: PokemonListarComponent;
  let fixture: ComponentFixture<PokemonListarComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
