// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';
// import { NotLoggedInGuard } from './not-logged-in-guard.guard';
// import { AuthService } from './auth.service';

// describe('NotLoggedInGuard', () => {
//   let guard: NotLoggedInGuard;
//   let authService: AuthService;
//   let router: Router;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       providers: [NotLoggedInGuard, AuthService]
//     });
//     guard = TestBed.inject(NotLoggedInGuard);
//     authService = TestBed.inject(AuthService);
//     router = TestBed.inject(Router);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

//   it('should allow access if user is not logged in', () => {
//     spyOn(authService, 'isLoggedIn').and.returnValue(false);
//     spyOn(authService, 'isAdmin').and.returnValue(false);
//     spyOn(router, 'navigate');

//     const canActivate = guard.canActivate();

//     expect(canActivate).toBeTrue();
//     expect(authService.isLoggedIn).toHaveBeenCalled();
//     expect(authService.isAdmin).not.toHaveBeenCalled();
//     expect(router.navigate).not.toHaveBeenCalled();
//   });

//   it('should redirect to admin dashboard if user is logged in as admin', () => {
//     spyOn(authService, 'isLoggedIn').and.returnValue(true);
//     spyOn(authService, 'isAdmin').and.returnValue(true);
//     spyOn(router, 'navigate');

//     const canActivate = guard.canActivate();

//     expect(canActivate).toBeFalse();
//     expect(authService.isLoggedIn).toHaveBeenCalled();
//     expect(authService.isAdmin).toHaveBeenCalled();
//     expect(router.navigate).toHaveBeenCalledWith(['/admin-dashboard']);
//   });

//   it('should redirect to user dashboard if user is logged in as user', () => {
//     spyOn(authService, 'isLoggedIn').and.returnValue(true);
//     spyOn(authService, 'isAdmin').and.returnValue(false);
//     spyOn(router, 'navigate');

//     const canActivate = guard.canActivate();

//     expect(canActivate).toBeFalse();
//     expect(authService.isLoggedIn).toHaveBeenCalled();
//     expect(authService.isAdmin).toHaveBeenCalled();
//     expect(router.navigate).toHaveBeenCalledWith(['/user-dashboard']);
//   });

//   afterEach(() => {
//     TestBed.resetTestingModule();
//   });
// });
