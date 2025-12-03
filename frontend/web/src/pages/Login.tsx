import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";
import { enqueueSnackbar } from "notistack";

const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

type LoginFormData = {
  email: string;
  password: string;
};

type LoginType = {
  setFormType?: React.Dispatch<React.SetStateAction<"login" | "register">>;
};

export type User = {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  phone: string;
  instituteName: string;
  profileType: 'VOLUNTEER' | 'STUDENT';
  status: 'ACTIVE' | 'REPORTED' | 'BLOCKED_BECAUSE_REPORTS' | 'DELETED';
  createdAt: string;
  updatedAt: string;
}

export const Login = ({ setFormType }: LoginType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: { email: string, password: string }) => {

    api.post("/auth/login", {
      email: data.email,
      password: data.password
    }).then(({ data }: { access_token: string, user: User }) => {

      localStorage.setItem("token", JSON.stringify(`Bearer ${data.access_token}`));
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    }).catch(error => {
      enqueueSnackbar(error, { preventDuplicate: false, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }, autoHideDuration: 4000 })
    })
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
        width: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
        px: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.2rem", sm: "3rem" },
          fontWeight: 800,
          textAlign: "center",
          color: "#333",
        }}
      >
        ESTUDAE
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          maxWidth: "380px",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 12,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          style={{ marginBottom: "16px", fontSize: "1.6rem" }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />

        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.5, fontSize: "1rem" }}
        >
          Entrar
        </Button>
      </form>

      <Typography sx={{ textAlign: "center" }}>
        Ainda não possui uma conta?{" "}
        <Button
          color="primary"
          onClick={() => setFormType?.("register")}
          sx={{ fontWeight: "bold" }}
        >
          Criar Conta
        </Button>
      </Typography>
    </Box>
  );
}