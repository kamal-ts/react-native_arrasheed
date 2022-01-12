
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'


export default function GetAsyncStorage() {
    useEffect(() => {
        setData();
        // deleteData();
    }, []);

    const [User, setUser] = useState({
        idJemaah: '',
        name: '',
        email: '',
        image: ''

    });

    function setData(){
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setUser(user);
                        // setEmail(user.email);
                        // console.log("hasil".User);
                        const hasil = {
                            idJemaah: User.idJemaah,
                            name: User.name,
                            email: User.email,
                            image: User.image
                        }
                        return hasil
                    }
                })

        } catch (error) {
            // console.error();
        }
    }

}
