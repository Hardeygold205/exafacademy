export interface RegisterUserPayload {
  id?: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  city?: string;
  country: string;
  auth?: string;
  occupation?: string;
  gender?: string;
  school?: string;
}

export interface LoginUserPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  privatetoken?: string;
  errorcode?: string;
  error?: string;
  exception?: string;
  message?: string;
}

export interface MoodleWarning {
  item: string;
  itemid: number;
  warningcode: string;
  message: string;
}

export interface MoodleAPIResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any[];
  success?: boolean;
  id?: number;
  userid?: number;
  username?: string;
  exception?: string;
  errorcode?: string;
  message?: string;
  warnings?: MoodleWarning[];
}
