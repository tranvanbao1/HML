// Base API Caller
import React from 'react';

const apiGetAllCart = 'https://hml-project.herokuapp.com/api/foods/market?page=...';
async function getCartFromServer() {
    try {
        let response = await fetch(apiGetAllCart);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

export {getCartFromServer};