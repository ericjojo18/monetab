import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

export class 


authGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) { 

    }
    
    canActivate() {
           if (this.authService.isAuthenticated()){
            return true;
           }

           this.router.navigate(['/login']);
           return false;
    }
}