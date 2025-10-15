import { User, UserRole } from '../../domain/user.model';
import { UserApiResponse } from '../interface/user.interface';

export class UserMappers {
  static mapToUser(userApiResponse: UserApiResponse): User {
    return {
      id: userApiResponse.id,
      name: userApiResponse.name,
      lastname: userApiResponse.lastname,
      role: userApiResponse.role as UserRole,
      createdAt: new Date(userApiResponse.createdAt),
      updatedAt: new Date(userApiResponse.updatedAt),
    };
  }
}
