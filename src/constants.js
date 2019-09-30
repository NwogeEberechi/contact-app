export const initialState = {
    newContact: {
        email: "",
        fullname: "",
        phone: "",
        address: "",
        occupation: ""
    },
    searchContact: {
        key: ""
    }
}

export const genderOptions = [
    { text: 'Female', value: 'female' },
    { text: 'Male', value: 'male' }
]