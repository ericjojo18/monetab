export interface UserInterface {
  id?:number
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password?: string;
  confirm_password: string;
  role: string;
  school: string;

}
