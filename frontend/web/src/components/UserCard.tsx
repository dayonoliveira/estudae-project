import { Box, TextField, Typography, Button, Paper } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { formatPhone } from "../utils/formatPhone";
import type { User } from "../pages/Login";
import { api } from "../service/api";
import { enqueueSnackbar } from "notistack";

export const UserCard = ({ onClose }: {  onClose: () => void }) => {
  
  const user: User = JSON.parse(localStorage.getItem("user"));
  
  const [data, setData] = useState<User>(user);

  const nameRef = useRef(user.name);
  const phoneRef = useRef(user.phone);
  const instituteNameRef = useRef(user.instituteName);
  const profileTypeRef = useRef(user.profileType);

  const handleChange = (field: string, value: string) => {
    setData((prev: User) => ({
      ...prev,
      [field]: field === "phone" ? formatPhone(value) : value,
    }));
  };

  function getUserById() {
    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        authorization: token
      }
    }

    api.get(`/user/by-id/${user.id}`, config)
    .then(({ data }: User) => {

      localStorage.setItem('user', JSON.stringify(data))

      onClose();
    }).catch(error => {
      enqueueSnackbar(error, { preventDuplicate: false, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }, autoHideDuration: 4000 })
    })
  }

  const saveChanges = () => {

    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        authorization: token
      }
    }

    api.put(`/user/${user.id}/edit`, {
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
      instituteName: instituteNameRef.current?.value,
      profileType: profileTypeRef.current?.value
    },
      config
    )
    .then(() => {
      getUserById()
    }).catch(error => {
      enqueueSnackbar(error, { preventDuplicate: false, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }, autoHideDuration: 4000 })
    })
    
  };

  if (!data) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, md: 0 },
        zIndex: 2000,
        overflowY: "auto",
        transform: "translateX(-15px)",
        "@media (min-width: 600px)": {
          transform: "none",
        },
      }}
    >
      <Paper
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: { xs: 320, sm: 380, md: 420 },
          padding: { xs: 2, sm: 3 },
          borderRadius: 3,
          position: "relative",
          maxHeight: { xs: "90vh", md: "auto" },
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Meu Perfil
        </Typography>

        <TextField
          defaultValue={nameRef.current}
          inputRef={nameRef}
          label="Nome completo"
          fullWidth
          margin="normal"
          value={nameRef.current}
          // onChange={(e) => handleChange("name", e.target.value)}
        />

        <TextField
          defaultValue={phoneRef.current}
          inputRef={phoneRef}
          label="Telefone"
          fullWidth
          margin="normal"
          value={phoneRef.current}
          // onChange={(e) => handleChange("phone", e.target.value)}
        />

        <TextField
          defaultValue={instituteNameRef.current}
          inputRef={instituteNameRef}
          label="Instituição"
          fullWidth
          margin="normal"
          // onChange={(e) => handleChange("institution", e.target.value)}
        />

        <TextField
          defaultValue={profileTypeRef.current}
          inputRef={profileTypeRef}
          label="Tipo de usuário"
          fullWidth
          margin="normal"
          value={profileTypeRef.current}
          // onChange={(e) => handleChange("role", e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            mt: 2,
            fontSize: { xs: "0.85rem", sm: "1rem" },
            py: { xs: 1, sm: 1.2 },
          }}
          fullWidth
          onClick={saveChanges}
        >
          Salvar alterações
        </Button>
      </Paper>
    </Box>
  );
};