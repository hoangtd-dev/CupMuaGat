import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInformationBoxComponent } from './match-information-box.component';

describe('MatchInformationBoxComponent', () => {
  let component: MatchInformationBoxComponent;
  let fixture: ComponentFixture<MatchInformationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchInformationBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchInformationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
