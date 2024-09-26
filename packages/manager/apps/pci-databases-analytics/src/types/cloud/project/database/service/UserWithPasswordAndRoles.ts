import { StatusEnum } from '@/types/cloud/project/database/StatusEnum';

/** User with password definition */
export interface UserWithPasswordAndRoles {
  /** Date of the creation of the user */
  createdAt?: string;
  /** User ID */
  id?: string;
  /** Password of the user */
  password: string;
  /** Roles the user belongs to */
  roles: string[];
  /** Current status of the user */
  status?: StatusEnum;
  /** Name of the user */
  username?: string;
}