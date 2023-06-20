// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { AddMovieComponent } from './add-movie.component';

// describe('AddMovieComponent', () => {
//   let component: AddMovieComponent;
//   let fixture: ComponentFixture<AddMovieComponent>;
//   let formBuilder: FormBuilder;
//   let httpTestingController: HttpTestingController;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
//       declarations: [AddMovieComponent],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddMovieComponent);
//     component = fixture.componentInstance;
//     formBuilder = TestBed.inject(FormBuilder);
//     httpTestingController = TestBed.inject(HttpTestingController);
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     httpTestingController.verify();
//   });

//   it('should send a POST request with correct data when form is submitted', () => {
//     spyOn(console, 'log'); // Spy on console.log to prevent logging during the test
//     const movieName = 'Test Movie';
//     const theatreName = 'Test Theatre';
//     const navigateSpy = spyOn(component, 'navigateToAdminDashboard').and.callThrough();

//     // Set form values
//     component.movieForm = formBuilder.group({
//       movieName: [movieName],
//       theatreName: [theatreName]
//     });

//     // Trigger form submission
//     component.submitForm();

//     // Expect a POST request to the specified URL with the correct data
//     const req = httpTestingController.expectOne('http://localhost:8082/api/v1.0/admin/addMovie');
//     expect(req.request.method).toEqual('POST');
//     expect(req.request.headers.get('Content-Type')).toEqual('application/json');
//     expect(req.request.headers.get('Authorization')).toContain('Bearer');
//     expect(req.request.body).toEqual({ movieName, theatreName });

//     // Simulate successful response
//     req.flush(null);

//     expect(console.log).toHaveBeenCalledWith('Movie added successfully');
//     expect(navigateSpy).toHaveBeenCalled();
//   });
// });
