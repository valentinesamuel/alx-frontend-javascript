export default function getResponseFromAPI() {
    const success = true
    return new Promise((res, rej) => {
        if (success) {
            res()
        } else {
            rej()
        }
    })
}