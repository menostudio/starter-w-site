const CustomApp = () => {
    const listPage=[];

    const addPage = (nomepagina:any)=>{
        listPage.push(nomepagina);
    };

    const getPage = () : number =>{
        return listPage.length;
    };

    return {addPage,getPage};
}

export default CustomApp();