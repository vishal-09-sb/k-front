// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AdminDashboardComponent } from './admin-dashboard.component';
// import { AuthService } from '../auth.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Movie } from '../model/movie';
// import { Observable, of } from 'rxjs';
// import { CommonModule } from '@angular/common';
// import { FilterPipe } from '../pipe/FilterPipe';



// describe('AdminDashboardComponent', () => {
//   let component: AdminDashboardComponent;
//   let fixture: ComponentFixture<AdminDashboardComponent>;
//   let authService: AuthService;
//   let http: HttpClient;
//   let httpMock: HttpTestingController;
//   let router: Router;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule, CommonModule],
//       declarations: [AdminDashboardComponent, FilterPipe], // Add FilterPipe here
//       providers: [AuthService]
//     }).compileComponents();
//   });
  
  

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdminDashboardComponent);
//     component = fixture.componentInstance;
//     authService = TestBed.inject(AuthService);
//     http = TestBed.inject(HttpClient);
//     httpMock = TestBed.inject(HttpTestingController);
//     router = TestBed.inject(Router);
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should get all movies on ngOnInit', () => {
//     const movies: Movie[] = [
//       new Movie(1, 'Movie 1', 'Theatre 1', 100, 50, [], false),
//       new Movie(2, 'Movie 2', 'Theatre 2', 200, 100, [], false)
//     ];

//     spyOn(component, 'getAllMovies').and.callThrough();
//     spyOn(console, 'log');

//     component.ngOnInit();

//     const req = httpMock.expectOne('http://localhost:8082/api/v1.0/getAllMovies');
//     expect(req.request.method).toBe('GET');
//     req.flush(movies);

//     expect(component.getAllMovies).toHaveBeenCalled();
//     expect(component.movies).toEqual(movies);
//     expect(console.log).toHaveBeenCalledWith(component.movies);
//   });

//   // Add more test cases for other methods in AdminDashboardComponent
// });
