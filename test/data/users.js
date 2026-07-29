export const STANDARD_PASSWORD = 'secret_sauce';

export const loginCases = [
    {
        username: 'standard_user',
        password: STANDARD_PASSWORD,
        expected: {
            success: true
        }
    },
    {
        username: 'locked_out_user',
        password: STANDARD_PASSWORD,
        expected: {
            success: false,
            errorMessage: 'Epic sadface: Sorry, this user has been locked out.'
        }
    }
];
