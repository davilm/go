import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com fisico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com fisico: IP da máquina
 */