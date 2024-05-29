import authService from "../services/authService";
// Kullanıcı girişi işlemini gerçekleştiren action fonksiyonu
export const login = (username, password, navigate) => {
  return () => {
    // Auth servisinden giriş işlemini çağır
    authService
      .login(username, password)
      .then((data) => {
        if (data) {
          console.log("Login sucess");
          navigate("/admin/"); // Başarılı giriş sonrası yönlendirme
        } else {
          console.log("Login failed");
        }
      })
      // Hata durumunda hata eylemini tetikle
      .catch((err) => err);
  };
};

// Kullanıcı çıkışı işlemini gerçekleştiren action fonksiyonu
export const logout = () => {
  // Auth servisinden çıkış işlemini çağır
  authService.logout();
  // Çıkış eylemini tetikle
  return {
    type: "LOGOUT",
  };
};
