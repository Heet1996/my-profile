let binaryMatrix=()=>{
    
}
var leftMostColumnWithOne = function(binaryMatrix) {
        
    let [row,col] =binaryMatrix.dimensions();
    let minInCol=Number.MAX_SAFE_INTEGER;
    let min=Number.MAX_SAFE_INTEGER;    
    for(let j=0;j<row;j++)
        {
            for(let i=col-1;col>=0;i--)
                {
                    if(binaryMatrix.get(j,i)==0)
                        break;
                    else minInCol=i;
                }
            if(minInCol<min)
                min=minInCol;
        }
    if(min==Number.MAX_SAFE_INTEGER)return -1;
     return min;   
};