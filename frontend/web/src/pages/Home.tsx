import { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Layout } from "../components/Layout";
import { UserPopup } from "../components/UsersPopup";
import { api } from "../service/api";
import { enqueueSnackbar } from "notistack";
import type { User } from "./Login";

export const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const user: User = JSON.parse(localStorage.getItem('user'))

  function getAllUsers() {

    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        authorization: token
      }
    }

    api.get("/user/all", config)
      .then(({ data }) => {
        setUsers(prevState => [...data])
      })
      .catch(error => {
          enqueueSnackbar(error, { preventDuplicate: false, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }, autoHideDuration: 4000 })
        }) 
  }

  useEffect(() => {
    getAllUsers()
  }, []);

  return (
    <Layout user={user}>
      <Box sx={{ padding: { xs: 2, md: 4 } }}>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.6rem", md: "2rem" },
          }}
        >
          Bem-vindo(a), {user?.name}! 👋
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#555",
            mb: 3,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Aqui aparecerão outros alunos da instituição{" "}
          <strong>{user?.instituteName}</strong>.
        </Typography>

        <Typography
          variant="h5"
          sx={{ mt: 4, mb: 2, fontSize: { xs: "1.3rem", md: "1.5rem" } }}
        >
          Alunos encontrados:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {users.map((u, index) => (
            <Paper
              key={index}
              sx={{
                width: 280,
                padding: 3,
                borderRadius: 3,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { transform: "scale(1.02)" },
              }}
              onClick={() => setSelectedUser(u)}
            >
              <Typography variant="h6">{u.name}</Typography>
              <Typography sx={{ mt: 1, color: "#555" }}>
                {u.instituteName}
              </Typography>
            </Paper>
          ))}
        </Box>

        {selectedUser && (
          <UserPopup user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mt: 4,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
        </Box>
      </Box>
    </Layout>
  );
};
