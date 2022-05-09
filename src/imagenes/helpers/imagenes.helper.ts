
export const renombrarPortada = (req,file,callback)=>{

    //console.log("RENAME=>",file)
    const nombreImagen = file.originalname.split('.')[0]
    
    const extensionImagen = file.originalname

    //generamos nombre aleatorio
    const nombreAleatorio = Array(4)
                            .fill(null)
                            .map( ()=> Math.round(Math.random() * 16).toString(16) )
                            .join('')
    // file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    callback(null,`${nombreAleatorio}-${extensionImagen}`)

}