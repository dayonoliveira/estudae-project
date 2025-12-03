import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { User } from "../pages/Login";

export const Layout = ({ user, children }: {user: User, children: React.ReactNode}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar user={user} />

      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};
