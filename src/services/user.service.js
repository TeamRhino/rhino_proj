import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    getAll
};

const login = (username,password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('/users/authenticate', requestOptions)
    .then(response => {
        if (!response.ok) {
            return Promise.reject(response.statusText);
        }

        return response.json();
    })
    .then(user => {
        if (user && user.token) {
            localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
    });
}

const logout = () => {
    localStorage.removeItem('user');
}

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

const handleResponse = (response) => {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}