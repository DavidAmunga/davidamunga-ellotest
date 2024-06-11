import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  AppBar,
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ello Books</title>
        <meta name="description" content="Ello Books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box sx={{ minHeight: "100vh" }}>
        {/* Header */}
        <AppBar
          position="static"
          sx={{ backgroundColor: "#54D3C2", margin: 0, height: "30%" }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Book Viewer
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          {/* Search Bar */}
          <Box
            sx={{
              p: 2,
              textAlign: "center",
              backgroundColor: "#E0F7FA",
              borderRadius: 2,
              my: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              What book do you want to read today? 📚
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter Book Name"
              fullWidth
              sx={{
                maxWidth: "600px",
                mx: "auto",
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />
          </Box>

          {/* Books */}
          <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={"imageUrl"}
                  alt={"ASDAD"}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    ASDAS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By {author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
