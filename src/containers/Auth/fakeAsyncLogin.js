import { USER_FAKE, PASSWORD_FAKE } from '@helpers/auth'

export default function fakeAsyncLogin(user, password) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (user === USER_FAKE && password === PASSWORD_FAKE) {
                resolve(true)
            }
            reject(false)
        }, 1000)
    )
}
