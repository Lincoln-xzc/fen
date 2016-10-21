/**
 * Created by lincoln on 16/9/8.
 */

const LOCALHOST = 'http://localhost:3000/api/';
module.exports = {
    HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    FINDBYCONDITION: LOCALHOST + 'main/findByCondition',
    MESSAGE: LOCALHOST + 'message/save',
    END: {
        HOME: {

        },
        LOGIN: LOCALHOST + 'user/login',
        REGISTER: LOCALHOST + 'user/register',
        DESCRIBE: {

        },
        FONTS: {
            'ADD': LOCALHOST + 'article/add',
            'DELETE': LOCALHOST + 'article/delete/',
            'UPDATE': LOCALHOST + 'article/update',
            'LIST': LOCALHOST + 'article/list'
        },
        IMAGES: {
            LIST: LOCALHOST + 'images/list',
            UPLOAD: LOCALHOST + 'images/upload',
            UPDATE: LOCALHOST + 'images/update',
            DELETE: LOCALHOST + 'images/delete/'
        },
        MAINS: {
            ADD: LOCALHOST + 'main/add',
            DELETE: LOCALHOST + 'main/delete/',
            UPDATE: LOCALHOST + 'main/update',
            LIST: LOCALHOST + 'main/list'
        }

    }
};