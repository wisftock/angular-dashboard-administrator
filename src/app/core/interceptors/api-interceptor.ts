import { HttpInterceptorFn } from '@angular/common/http';

export const ApiInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
