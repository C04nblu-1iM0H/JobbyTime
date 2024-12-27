export default function SVGComponent({path, fill, width = "18px", height = "18"}){
    const numericWidth = parseFloat(width);
    const numericHeight = parseFloat(height);
    return(
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${numericWidth} ${numericHeight}`}
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