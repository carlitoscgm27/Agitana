import { inject } from '@angular/core';

import { CanActivateFn } from '@angular/router';
import { UserService } from '../service/user.service';

export const roleGuardGuard: CanActivateFn = (route, state) => {
 const userService= inject(UserService);
 return userService.getCurrentUser();
};
