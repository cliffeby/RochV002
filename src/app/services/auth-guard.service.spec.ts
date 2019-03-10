import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AppRoutingModule} from '../app-routing.module'
import { LogInComponent } from '../components/log-in/log-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { StatusComponent } from '../components/status/status.component';
import { LandingComponent } from '../components/landing/landing.component';

describe('AuthGuardService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent, SignUpComponent, StatusComponent, LandingComponent ],
      imports: [ HttpClientModule, AppRoutingModule, FormsModule ],
      providers: [ AuthGuardService, AuthService ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
