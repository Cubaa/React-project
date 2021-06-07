import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface IFile {
    changeHandler: (e: any) => void;
    isFilePicked: boolean;
    selectedFile:any;
}
export const FilePanel: React.FC<IFile>= (props)=>{
    return(
        <div>
       
        {props.isFilePicked ? (
        <div style={{margin: "0", padding: "0", display: "flex", alignItems: "center"}}>
            <FontAwesomeIcon  style={{marginRight: "10px"}} icon={['far', 'file']} />
            <p style={{margin:"0", color: "darkblue", fontSize: "18px"}}>{props.selectedFile.name}</p>
        </div>
    ) : (

        <input type="file" name="file" onChange={(e)=>props.changeHandler(e)}/>    
    
    )}
      
    </div>
    )
}