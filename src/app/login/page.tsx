"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WarningIcon from "@mui/icons-material/Warning";
import {
  Alert,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Typography,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Context } from "../../context/store";
import { LoginForm } from "../../repositories/types/login-form";
import { Path } from "../../types/path";
import { loginUsecase } from "../../usecases/auth/login.usecase";
import styles from "./page.module.css";

const Login = () => {
  const router = useRouter();
  const { dispatch } = useContext(Context);
  const [auth, setAuth] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [isWarning, setIsWarning] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const login = async () => {
    if (!auth.username || !auth.password) {
      setIsEmpty(true);
      return;
    }
    const data = await loginUsecase.execute(auth.username, auth.password);
    if (data.error) {
      return setIsWarning(true);
    }
    router.push(Path.Root);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Typography marginBottom={2} level="h2">
          Sign in
        </Typography>
        {isWarning && (
          <Alert
            sx={{ alignItems: "flex-start", marginBottom: "18px" }}
            startDecorator={<WarningIcon />}
            variant="soft"
            color="warning"
            endDecorator={
              <IconButton
                variant="soft"
                color="warning"
                onClick={() => setIsWarning(false)}
              >
                <CloseRoundedIcon />
              </IconButton>
            }
          >
            <Typography level="body-sm" color="warning">
              Invalid username or password. Please try again.
            </Typography>
          </Alert>
        )}
        <FormControl className={styles.email} error={isEmpty && !auth.username}>
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
          className={styles.password}
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
        <Button className={styles.btn} fullWidth onClick={login}>
          Sign In
        </Button>
        <Divider className={styles.btn}>or</Divider>
        <Button
          variant="plain"
          fullWidth
          onClick={() => router.push(Path.Register)}
        >
          Sign Up
        </Button>
      </div>
    </main>
  );
};

export default Login;
