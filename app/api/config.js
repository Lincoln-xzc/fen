/**
 * Created by lincoln on 16/9/8.
 */

const LOCALHOST = 'http://localhost:3000/api/';
module.exports = {
    HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    HOME: {

    },
    INTRODUCTION: {

    },
    PRODUCTS: {

    },
    CULTURAL: {

    },
    CENTER: {

    },
    MESSAGE: {

    },
    CONTRACT: {

    },
    END: {
        HOME: {

        },
        LOGIN: LOCALHOST + 'user/login',
        REGISTER: LOCALHOST + 'user/register',
        DESCRIBE: {

        },
        FONTS: {

        },
        IMAGES: {
            LIST: LOCALHOST + 'images/list',
            UPLOAD: LOCALHOST + 'images/upload',
            UPDATE: LOCALHOST + 'images/update',
            DELETE: LOCALHOST + 'images/delete/'
        },

    }
};