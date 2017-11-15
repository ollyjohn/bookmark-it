import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component:LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have signIn function', function (){

    expect [LoginComponent.signIn].toBeDefined();

  });

  it ('should have signup variables', function (){

    expect [AuthService.signUp].not.toBe(null);

  });

  it ('should have register variables', function (){

    expect [AuthService.registerUser].not.toBe(null);

  });

});
