import { useState } from "react"
import { clickWrenchInterface } from "../App"
import Button from "./Button"

const EditForm = ({onUpd,id, onClickWrench}: properties) => {

    const [updBrand, setupdBrand] = useState("")
    const [updModel, setupdModel] = useState("")

    const submitAttr = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!updBrand) {
            alert("Please specify Brand")
            return
        }

        if (!updModel) {
            alert("Please specify Model")
            return
        }

        onUpd(id,updBrand, updModel)

        setupdBrand('')
        setupdModel('')
        
        onClickWrench()

    }

    return (
        <form  onSubmit={submitAttr}>
            <div className="form-control">
                <input type='text' placeholder="New Brand" value={updBrand} onChange={(e) => setupdBrand(e.target.value)} />
                <input type='text' placeholder="New Model" value={updModel} onChange={(e) => setupdModel(e.target.value)} />
                <input type='submit' value='Update' className="btn" />
            </div>
        </form>
    )
}

interface properties {
    onUpd:updInterface
    id:number
    onClickWrench: clickWrenchInterface
}

export interface updInterface {
    (id:number,brand:string, model:string):void
}

export default EditForm