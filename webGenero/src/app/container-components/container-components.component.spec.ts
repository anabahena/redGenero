import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentsComponent } from './container-components.component';

describe('ContainerComponentsComponent', () => {
  let component: ContainerComponentsComponent;
  let fixture: ComponentFixture<ContainerComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
