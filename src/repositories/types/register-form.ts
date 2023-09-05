import { LoginForm } from "./login-form";

export interface RegisterForm extends LoginForm {
  firstName: string;
  lastName: string;
}
