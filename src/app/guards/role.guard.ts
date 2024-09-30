import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root',
  })
  export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      const requiredRole = next.data['role'];
      const userRole = this.authService.getUserRoleFromToken();
  
      if (userRole === requiredRole) {
        return true;
      } else {
        this.router.navigate(['error/forbidden']);
        return false;
      }
    }
  }
  