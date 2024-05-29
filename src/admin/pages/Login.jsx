import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, logout } from "../../actions/authAction";
import { useNavigate } from "react-router-dom";

// Varsayılan tema oluşturma
const defaultTheme = createTheme();

// Login bileşeni
const Login = () => {
  const dispatch = useDispatch(); // Redux dispatch fonksiyonunu almak için kullanılır

  const navigate = useNavigate(); // Router'a yönlendirme yapmak için kullanılır
  // Form submit olduğunda çalışacak fonksiyon
  const onSubmit = (data) => {
    //username = mor_2314
    //pass = 83r5^_
    // API isteği yapacak login aksiyonunu dispatch ediyoruz
    dispatch(login(data.email, data.password, navigate));
  };

  React.useEffect(() => {
    //componentDidMount işlemleri burada gerçekleştirilir
    dispatch(logout());
  }, []); // Boş bir bağımlılık dizisi vererek, bu useEffect sadece bileşen ilk kez monte edildiğinde çalışır

  const {
    register, // inputları kaydetmek için kullanılır
    handleSubmit, // form submit işlemini yönetmek için kullanılır
    formState: { errors }, // form hatalarını yönetmek için kullanılır
  } = useForm();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)} // Form submit edildiğinde onSubmit fonksiyonunu çalıştır
              sx={{ mt: 1 }}
              noValidate
              autoComplete="off"
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: "Email boş geçilemez." })} // React Hook Form kullanarak email alanını kaydet ve doğrulama ekle
                error={!!errors.email} // Hata varsa hata durumunu göster
                helperText={errors.email ? errors.email.message : ""} // Hata mesajını göster
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", { required: "Şifre boş geçilemez." })} // React Hook Form kullanarak password alanını kaydet ve doğrulama ekle
                error={!!errors.password} // Hata varsa hata durumunu göster
                helperText={errors.password ? errors.password.message : ""} // Hata mesajını göster
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Beni hatırla"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// Login Tarih ve web site yönlendirme kodu
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Login;
