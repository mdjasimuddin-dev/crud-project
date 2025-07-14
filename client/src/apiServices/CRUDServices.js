import axios from 'axios'

export const Create = (productName, productCode, img, unitPrice, qty, totalPrice) => {
    const URL = `http://localhost:8000/api/products`
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
            console.log(res.status);
            if (res.status === 201) {
                return true
            } else {
                return false
            }

        })
        .catch(err => console.log(err))
}



export const Read = () => {
    const URL = `http://localhost:8000/api/products`

    return axios.get(URL)
        .then(res => {
            if (res.status === 200) {
                return res.data.data
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
}


export const ReadById = (id) => {
    const URL = `http://localhost:8000/api/products/${id}`
    return axios.get(URL)
        .then(res => {
            if (res.status === 200) {
                return res.data.data
            } else {
                return false
            }
        })
        .catch(err => console.log(err))

}


export const Update = (id, productName, productCode, img, unitPrice, qty, totalPrice) => {
    const URL = `http://localhost:8000/api/products/${id}`

    const postData = {
        ProductName: productName,
        ProductCode: productCode,
        Img: img,
        UnitPrice: unitPrice,
        Qty: qty,
        TotalPrice: totalPrice,
    }

    return axios.put(URL, postData)
        .then(res => {
            console.log(res.data.data);

            if (res.status === 200) {
                return res.data.data
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
}


export const Delete = (id) => {
    const URL = `products/${id}`
    return axios.delete(URL)
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