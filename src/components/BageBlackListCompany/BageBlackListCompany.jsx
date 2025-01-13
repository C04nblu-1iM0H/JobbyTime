import del from '../../assets/profile/del.svg';

export default function BageBlackListCompany({name, handleDel}){
    return( 
        <div 
            className="badge-blackList" 
        >

            <p className="description-blackList">{name}</p>
            <img
                onClick={ () => handleDel(name)} 
                className="icon" 
                src={del} 
                alt="del-icon" 
            />
        </div>        
    )
}