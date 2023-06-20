// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of, throwError } from 'rxjs';

// import { LoginComponent } from './login.component';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let authService: any; // Replace 'any' with the actual type of your authentication service
//   let sessionStorage: any; // Replace 'any' with the actual type of your session storage object
//   let router: any; // Replace 'any' with the actual type of your router object

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       imports: [
//         RouterTestingModule,
//         FormsModule,
//         ReactiveFormsModule,
//         HttpClientTestingModule
//       ],
//       providers: [
//         // Provide your authentication service, session storage object, and router object
//         { provide: AuthService, useValue: authService },
//         { provide: sessionStorage, useValue: sessionStorage },
//         { provide: Router, useValue: router }
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     authService = TestBed.inject(AuthService); // Update to the actual injection method for your authentication service
//     sessionStorage = TestBed.inject(sessionStorage); // Update to the actual injection method for your session storage object
//     router = TestBed.inject(Router); // Update to the actual injection method for your router object
    
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
  
//     fixture.detectChanges();
//   });
  

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize the loginForm with required form controls', () => {
//     expect(component.loginForm.get('loginID')).toBeTruthy();
//     expect(component.loginForm.get('password')).toBeTruthy();
//   });

//   it('should call login method and navigate to admin-dashboard when loginID is admin123', () => {
//     const loginID = 'admin123';
//     const password = 'password';
//     const mockResponse = {
//       user: [{
//         userName: 'admin123',
//         userPassword: password,
//       }],
//       jwtToken: 'mockJwtToken',
//     };

//     spyOn(authService, 'login').and.returnValue(of(mockResponse));
//     spyOn(sessionStorage, 'setItem');
//     spyOn(router, 'navigate'); // Add this line to spy on the 'navigate' method

//     component.loginForm.setValue({ loginID, password });
//     component.onSubmit();

//     expect(authService.login).toHaveBeenCalledWith(loginID, password);
//     expect(sessionStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockResponse.user));
//     expect(sessionStorage.setItem).toHaveBeenCalledWith('jwtToken', mockResponse.jwtToken);
//     expect(router.navigate).toHaveBeenCalledWith(['/admin-dashboard']);
//   });

//   it('should call login method and navigate to user-dashboard when loginID is not admin123', () => {
//     const loginID = 'user123';
//     const password = 'password';
//     const mockResponse = {
//       user: [{
//         userName: 'user123',
//         userPassword: password,
//       }],
//       jwtToken: 'mockJwtToken',
//     };

//     spyOn(authService, 'login').and.returnValue(of(mockResponse));
//     spyOn(sessionStorage, 'setItem');
//     spyOn(router, 'navigate'); // Add this line to spy on the 'navigate' method

//     component.loginForm.setValue({ loginID, password });
//     component.onSubmit();

//     expect(authService.login).toHaveBeenCalledWith(loginID, password);
//     expect(sessionStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockResponse.user));
//     expect(sessionStorage.setItem).toHaveBeenCalledWith('jwtToken', mockResponse.jwtToken);
//     expect(router.navigate).toHaveBeenCalledWith(['/user-dashboard']);
//   });

//   it('should display error message when an error occurs during login', () => {
//     const loginID = 'user123';
//     const password = 'password';
//     const errorMessage = 'Login error message';

//     spyOn(authService, 'login').and.returnValue(throwError(errorMessage));

//     component.loginForm.setValue({ loginID, password });
//     component.onSubmit();

//     expect(authService.login).toHaveBeenCalledWith(loginID, password);
//     expect(component.popupMessage).toBe('Login ID or password is incorrect.');
//     expect(component.isPopupVisible).toBeTrue();
//     expect(component.isError).toBeTrue();
//     expect(router.navigate).not.toHaveBeenCalled();
//   });

//   it('should close the popup and navigate to the login component', () => {
//     spyOn(router, 'navigate');

//     component.isError = false;
//     component.closePopup();

//     expect(component.isPopupVisible).toBeFalse();
//     expect(router.navigate).toHaveBeenCalledWith(['/login']);
//   });
// });
