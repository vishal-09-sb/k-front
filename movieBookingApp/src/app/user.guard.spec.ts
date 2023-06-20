// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment } from '@angular/router';
// import { UserGuard } from './user.guard';
// import { AuthService } from './auth.service';

// class MockAuthService {
//   isUser(): boolean {
//     // Replace with your custom implementation
//     return true;
//   }

//   isAdmin(): boolean {
//     // Replace with your custom implementation
//     return true;
//   }
// }

// describe('UserGuard', () => {
//   let guard: UserGuard;
//   let authService: MockAuthService;
//   let router: Router;
//   let activatedRouteSnapshot: ActivatedRouteSnapshot;
//   let routerStateSnapshot: RouterStateSnapshot;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       providers: [
//         UserGuard,
//         { provide: AuthService, useClass: MockAuthService }
//       ]
//     });
//     guard = TestBed.inject(UserGuard);
//     authService = TestBed.inject(AuthService) as MockAuthService;
//     router = TestBed.inject(Router);

//     // Create a mock ActivatedRouteSnapshot and RouterStateSnapshot
//     activatedRouteSnapshot = new ActivatedRouteSnapshot();
//     routerStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [], {
//       url: '/protected-route'
//     });
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

//   it('should allow access if user is an admin', () => {
//     spyOn(authService, 'isUser').and.returnValue(false);
//     spyOn(authService, 'isAdmin').and.returnValue(true);
//     spyOn(router, 'navigate');

//     const canActivate = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

//     expect(canActivate).toBeTrue();
//     expect(authService.isUser).toHaveBeenCalled();
//     expect(authService.isAdmin).toHaveBeenCalled();
//     expect(router.navigate).toHaveBeenCalledWith(jasmine.arrayContaining(['/admin-dashboard']));

//   });

//   it('should allow access if user is a regular user', () => {
//     spyOn(authService, 'isUser').and.returnValue(true);
//     spyOn(authService, 'isAdmin').and.returnValue(false);

//     spyOn(router, 'navigate');
  
//     const canActivate = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
  
//     expect(canActivate).toBeTrue();
//     expect(authService.isUser).toHaveBeenCalled();
//     expect(authService.isAdmin).toHaveBeenCalled();
//     expect(router.navigate).not.toHaveBeenCalled();
//   });
  

//   it('should redirect to admin dashboard if user is not logged in', () => {
//     spyOn(authService, 'isUser').and.returnValue(false);
//     spyOn(authService, 'isAdmin').and.returnValue(false);
//     spyOn(router, 'navigate');

//     const canActivate = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

//     expect(canActivate).toBeFalse();
//     expect(authService.isUser).toHaveBeenCalled();
//     expect(authService.isAdmin).toHaveBeenCalled();
//     expect(router.navigate).toHaveBeenCalledWith(['/login']);
//   });

//   afterEach(() => {
//     TestBed.resetTestingModule();
//   });
// });
