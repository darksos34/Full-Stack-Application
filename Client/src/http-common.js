/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */

import axios from "axios";
// import AuthHeader from './services/AuthHeader'

// Create single API base URL for API calls to the backend (including Authentication Header)
export default axios.create({
    baseURL: "http://localhost:8080/api",
    // headers: AuthHeader(),
});
