import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { LandingComponent } from './landing.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from '../log-in/log-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { StatusComponent } from '../status/status.component';
import { reducers } from 'src/app/store/app.states';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent, LogInComponent, SignUpComponent, StatusComponent ],
      imports: [AppRoutingModule, FormsModule, StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    // store = fixture.debugElement.injector.get(Store)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
