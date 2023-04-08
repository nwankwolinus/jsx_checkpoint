const user={
    fullname: 'Linus Nwankwo',
    age: 49,
    sex: 'Male',
    Nationality: 'Nigerian', 
    Address: 'Lagos, Nigeria'  
}

function Address(){
    return(
        <div>
            <h3 style={{color: 'green', fontFamily: 'sans-serif', border: '1px solid grey'}}>{user.Address}</h3>
        </div>
    )
}

export default Address;