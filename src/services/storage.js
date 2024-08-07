import { useRouter } from 'vue-router';

const router = useRouter();

export const setToken = (token) => {
    localStorage.setItem('token', token);
}

export const setUser = (user) => {
    let localStorageUser = JSON.stringify(user);

    console.log(localStorageUser);
    localStorage.setItem(
        "user",
        btoa(localStorageUser).split("").reverse().join("")
    );
};