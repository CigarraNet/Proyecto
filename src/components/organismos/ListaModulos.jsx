import styled from "styled-components";
import { useUsuariosStore } from "../../store/UsuariosStore";
import { useEffect, useState } from "react";
export function ListaModulos({checkboxs,setCheckboxs,accion}) {
    const {datamodulos,datapermisosEdit} = useUsuariosStore()
    const [_isCheked, _setisChecked] = useState(true);
    useEffect(()=>{
        if(accion=="Editar"){
            let allDocs = [];
            datamodulos.map((element) =>{
                const statePermisos=datapermisosEdit?.some((objeto)=>objeto.modulos.nombre.includes(element.nombre))
                if(statePermisos){
                    allDocs.push({...element,check: true})
                }
                else{
                    allDocs.push({...element,check: false})
                }
            })
            setCheckboxs(allDocs)
        }else{
            setCheckboxs(datamodulos)
        }
    },[datapermisosEdit, accion, datamodulos, setCheckboxs]);
    const handlecheckbox=(id)=>{
        setCheckboxs((prev)=>{
            return prev?.map((item)=>{
                if(item.id===id){
                    return {...item,check:!item.check}
                }
                else{
                    return {...item}
                }
            })
        })
        console.log(checkboxs);
    }
    const seleccionar=(e)=>{
        let check = e.target.checked;
        _setisChecked(check);
        console.log(check);
    };
    return (<Container>
    {
        checkboxs?.map((item,index)=>{
            return(<div className="content" key={index} onClick={()=>handlecheckbox(item.id)}>
                <input checked={item.check} type="checkbox" onChange={(e)=>seleccionar(e)}/>
                <span>{item.nombre}</span>
            </div>)
        })
    }
    </Container>);
}
const Container =styled.span`
  display: flex;
  flex-direction: column;
  border: 2px dashed #414244;
  border-radius: 15px;
  padding: 20px;
  gap: 15px;
  .content{
    display: flex;
    gap: 20px;
  }
`;



