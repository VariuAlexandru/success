export interface AppStateInterface {
  spinner: boolean;
  profile: ProfileInterface | null,
}

export interface ProfileInterface {
  id: string,
  userType: UserTypesEnum
  signedIn: boolean;
}

export enum UserTypesEnum {'guest' = 'guest', 'user' = 'user', 'premium' = 'premium' ,'vip' = 'vip', 'admin'='admin'}
