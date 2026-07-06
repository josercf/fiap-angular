import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFilhoComponent } from './botao-filho.component';

describe('BotaoFilhoComponent', () => {
  let component: BotaoFilhoComponent;
  let fixture: ComponentFixture<BotaoFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoFilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
