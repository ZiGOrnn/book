"use client";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Typography,
  styled,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterForm } from "../../repositories/types/register-form";
import { Path } from "../../types/path";
import { registerUsecase } from "../../usecases/auth/register.usecase";
import styles from "./page.module.css";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const Register = () => {
  const router = useRouter();
  const [auth, setAuth] = useState<RegisterForm>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const signUp = async () => {
    if (!auth.username || !auth.password) {
      setIsEmpty(true);
      return;
    }
    const data: RegisterForm = {
      ...auth,
    };
    const result = await registerUsecase.execute(data);
    if (result.error) return;
    router.push(Path.Login);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Typography marginBottom={2} level="h2">
          Sign Up
        </Typography>
        <FormControl
          className={styles.input_text}
          error={isEmpty && !auth.username}
        >
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={auth.username}
            onChange={(e) =>
              setAuth((v) => ({ ...v, username: e.target.value }))
            }
          />
          {isEmpty && !auth.username && (
            <FormHelperText>Please input your username!</FormHelperText>
          )}
        </FormControl>

        <FormControl
          className={styles.input_text}
          error={isEmpty && !auth.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={auth.password}
            onChange={(e) =>
              setAuth((v) => ({ ...v, password: e.target.value }))
            }
          />
          {isEmpty && !auth.password && (
            <FormHelperText>Please input your password!</FormHelperText>
          )}
        </FormControl>
        <FormControl
          className={styles.input_text}
          error={isEmpty && !auth.firstName}
        >
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            value={auth.firstName}
            onChange={(e) =>
              setAuth((v) => ({ ...v, firstName: e.target.value }))
            }
          />
          {isEmpty && !auth.password && (
            <FormHelperText>Please input your first name!</FormHelperText>
          )}
        </FormControl>
        <FormControl
          className={styles.input_text}
          error={isEmpty && !auth.lastName}
        >
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            value={auth.lastName}
            onChange={(e) =>
              setAuth((v) => ({ ...v, lastName: e.target.value }))
            }
          />
          {isEmpty && !auth.password && (
            <FormHelperText>Please input your last name!</FormHelperText>
          )}
        </FormControl>
        <Button className={styles.btn} fullWidth onClick={signUp}>
          Sign Up
        </Button>
      </div>
    </main>
  );
};

export default Register;
