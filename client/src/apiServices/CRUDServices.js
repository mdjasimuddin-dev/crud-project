import axios from 'axios'

export const Create = (productName, productCode, img, unitPrice, qty, totalPrice) => {
    const URL = `/products`
    const postData = {
        ProductName: productName,
        ProductCode: productCode,
        Img: img,
        UnitPrice: unitPrice,
        Qty: qty,
        TotalPrice: totalPrice,
    }

    return axios.post(URL, postData)
        .then(res => {
            res.postData
            if (res.status === 201) {
                return true
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
}



export const Read = () => {
    const URL = `/products`

    return axios.get(URL)
        .then(res => {
            console.log(res.data);

            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
}


export const ReadById = (id) => {
    const URL = `/products/${id}`
    return axios.get(URL)
        .then(res => {
            console.log(res.data);

            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch(err => console.log(err))

}


export const Update = (id, productName, productCode, img, unitPrice, qty, totalPrice) => {
    const URL = `/products/${id}`

    const postData = {
        ProductName: productName,
        ProductCode: productCode,
        Img: img,
        UnitPrice: unitPrice,
        Qty: qty,
        TotalPrice: totalPrice,
    }

    return axios.post(URL, postData)
        .then(res => {
            console.log(res.data);

            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
}


export const Delete = (id) => {
    const URL = `products/${id}`
    return axios.post(URL)
        .then(res => {
            console.log(res.data);

            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
}