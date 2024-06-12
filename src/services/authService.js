import api from "../helpers/api";
import { Constants, TokenHelper } from "../utilities/imports/import";

/**
 * Bu fonksiyon gelen bilgiler ile kullanıcı girişi yapar.
 * @param {string} username - kullanıcı adı
 * @param {string} password - password
 * @returns {number} Status'ü döner
 */
const login = (email, password) => {
    return api
        .post("/api/v1/Auth/Login", {
            username: email,
            password: password,
        })
        .then((response) => {
            const { data } = response;
            var result = data;
            // Kullanıcı doğru bir şekilde giriş yaparsa
            if (response.status == window.StatusCodes.SUCCESS) {
                if (result.success) {
                    var token = result.data.authToken;
                    var userData = TokenHelper.parseJWT(token);
                    if (userData) {
                        // tokendan gelen user bilgisini storage'a kayıt ediyoruz
                        localStorage.setItem(
                            Constants.USER_KEY,
                            JSON.stringify(userData),
                        );
                        // token'ı kayıt ediyoruz
                        localStorage.setItem(Constants.TOKEN_KEY, token);
                        return true;
                    }
                }
            }
            return false;
        })
        .catch((error) => {
            //console.error("Login Error:", error);
            throw error; // Hata durumunda yakalanması için hata fırlat
        });
};

const logout = () => {
    localStorage.removeItem(Constants.TOKEN_KEY);
    localStorage.removeItem(Constants.USER_KEY);
};

export default { login, logout };
