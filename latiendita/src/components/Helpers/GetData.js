import MOCK_DATA from "../Data/MOCK_DATA"

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(MOCK_DATA)
        }, 1000)
    })
}