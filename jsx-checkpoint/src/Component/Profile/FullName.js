const user={
    fullname: 'Linus Nwankwo',
    age: 49,
    sex: 'Male',
    Nationality: 'Nigerian'   
}

function FullName(){
    return(
        <div>
            <h1 style={{color: 'grey', fontFamily: 'sans-serif', border: '1px solid red', width: '800px', marginLeft: '400px'}}>{user.fullname}</h1>
        </div>
    )
}

export default FullName;