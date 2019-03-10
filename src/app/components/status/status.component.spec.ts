import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { LogInComponent } from '../log-in/log-in.component';
import { Store, StoreModule } from '@ngrx/store';
import { LandingComponent } from '../landing/landing.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { StatusComponent } from '../status/status.component';
import { reducers } from 'src/app/store/app.states';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent, LogInComponent, SignUpComponent, StatusComponent ],
      imports: [AppRoutingModule, FormsModule, StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
