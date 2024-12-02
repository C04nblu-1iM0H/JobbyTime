export default function SVGComponent({path, fill, width = "18px", height = "18"}){
        
    return(
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill={fill}
        >
            {
                !Array.isArray(path) 
                ? <path d={path}  /> 
                : path.map((path, i) =>{
                    const {icon} = path;
                    return (<path d={icon}  key={i}/>)
                })
            }
            
        </svg>
    )
}   