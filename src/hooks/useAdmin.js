import { useEffect, useState } from "react";

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://server-rose.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false);
            })
            .catch(error=>console.log(error))
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;