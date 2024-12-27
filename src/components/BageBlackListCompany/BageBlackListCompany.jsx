import del from '../../assets/profile/del.svg';

export default function BageBlackListCompany({id, name, handleDel}){
    return( 
        <div 
            className="badge-blackList" 
        >

            <p className="description-blackList">{name}</p>
            <img
                onClick={ () => handleDel(id)} 
                className="icon" 
                src={del} 
                alt="del-icon" 
            />
        </div>        
    )
}