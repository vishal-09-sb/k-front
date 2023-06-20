// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { RegisterComponent } from './register.component';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MessageServiceService } from '../message-service.service';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//   let httpMock: HttpTestingController;
//   let messageService: MessageServiceService;
//   let router: Router;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [RegisterComponent],
//       imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
//       providers: [MessageServiceService, Router]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     httpMock = TestBed.inject(HttpTestingController);
//     messageService = TestBed.inject(MessageServiceService);
//     router = TestBed.inject(Router);
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should send a POST request to register a new user', () => {
//     const mockUserData = {
//       userName: 'john123',
//       fullName: 'John Doe',
//       email: 'john@example.com',
//       userPassword: 'password',
//       secretQuestion: 'What is your favorite color?',
//       secretAnswer: 'Blue'
//     };

//     // Spy on the setMessage method of the messageService
//     spyOn(messageService, 'setMessage');

//     // Trigger the registerUser method
//     component.registerUser(mockUserData);

//     // Expect a POST request to the specified URL with the provided payload
//     const req = httpMock.expectOne('http://localhost:9091/registerNewUser');
//     expect(req.request.method).toBe('POST');
//     expect(req.request.body).toEqual({
//       ...mockUserData,
//       role: [
//         {
//           roleName: 'user',
//           roleDesc: 'For users'
//         }
//       ]
//     });

//     // Provide a response to the request
//     const mockResponse = { message: 'Registration successful!' };
//     req.flush(mockResponse);

//     // Expect the messageService.setMessage method to be called with the success message
//     expect(messageService.setMessage).toHaveBeenCalledWith('Registration successful!');

//     // Expect the registerForm to be reset
//     expect(component.registerForm.value).toEqual({
//       userName: null,
//       fullName: null,
//       email: null,
//       userPassword: null,
//       secretQuestion: null,
//       secretAnswer: null
//     });

//     // Expect navigation to the login page
//     const spy = spyOn(router, 'navigate');
//     expect(spy).toHaveBeenCalledWith(['/login']);
//   });

//   it('should handle an error during user registration', () => {
//     const mockUserData = {
//       userName: 'john123',
//       fullName: 'John Doe',
//       email: 'john@example.com',
//       userPassword: 'password',
//       secretQuestion: 'What is your favorite color?',
//       secretAnswer: 'Blue'
//     };

//     // Spy on the setMessage method of the messageService
//     spyOn(messageService, 'setMessage');

//     // Spy on the navigate method of the router
//     const routerSpy = spyOn(router, 'navigate');

//     // Trigger the registerUser method
//     component.registerUser(mockUserData);

//     // Expect a POST request to the specified URL with the provided payload
//     const req = httpMock.expectOne('http://localhost:9091/registerNewUser');
//     expect(req.request.method).toBe('POST');

//     // Provide an error response to the request
//     const errorResponse = new ErrorEvent('Internal Server Error');
//     req.error(errorResponse);

//     // Expect the messageService.setMessage method to be called with the error message
//     expect(messageService.setMessage).toHaveBeenCalledWith('Oops Something went wrong !' + errorResponse);

//     // Expect the registerForm to be reset
//     expect(component.registerForm.value).toEqual({
//       userName: null,
//       fullName: null,
//       email: null,
//       userPassword: null,
//       secretQuestion: null,
//       secretAnswer: null
//     });

//     // Expect navigation to the login page
//     expect(routerSpy).toHaveBeenCalledWith(['/login']);
//   });
// });
