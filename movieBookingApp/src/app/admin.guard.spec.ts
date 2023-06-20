// import { TestBed, async } from '@angular/core/testing';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

// import { adminGuard } from './admin.guard';
// import { AuthService } from './auth.service';
// import { RouterTestingModule } from '@angular/router/testing';

// class MockAuthService {
//   isAdmin(): boolean {
//     return true;
//   }

//   isUser(): boolean {
//     return true;
//   }
// }

// describe('adminGuard', () => {
//   let guard: adminGuard;
//   let authService: AuthService;
//   let router: Router;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       providers: [
//         { provide: AuthService, useClass: MockAuthService },
//         adminGuard
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     guard = TestBed.inject(adminGuard);
//     authService = TestBed.inject(AuthService);
//     router = TestBed.inject(Router);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

//   describe('canActivate', () => {
//     it('should return true if user is an admin', () => {
//       spyOn(authService, 'isAdmin').and.returnValue(true);
//       const canActivate = guard.canActivate(new ActivatedRouteSnapshot(), {} as RouterStateSnapshot);
//       expect(canActivate).toBe(true);
//     });
//   });
  
//     it('should navigate to user dashboard if user is not an admin but is a regular user', () => {
//       spyOn(authService, 'isAdmin').and.returnValue(false);
//       spyOn(authService, 'isUser').and.returnValue(true);
//       const navigateSpy = spyOn(router, 'navigate');
//       const activatedRouteSnapshot = new ActivatedRouteSnapshot();
//       const routerStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
//       guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
//       expect(navigateSpy).toHaveBeenCalledWith(['/user-dashboard']);
//     });

//     it('should navigate to login if user is neither an admin nor a regular user', () => {
//       spyOn(authService, 'isAdmin').and.returnValue(false);
//       spyOn(authService, 'isUser').and.returnValue(false);
//       const navigateSpy = spyOn(router, 'navigate');
//       const activatedRouteSnapshot = new ActivatedRouteSnapshot();
//       const routerStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
//       guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
//       expect(navigateSpy).toHaveBeenCalledWith(['/login']);
//     });
//   });
