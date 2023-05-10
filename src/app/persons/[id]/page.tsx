import EditUserPage from "./EditUserPage";

export default async function EditUserLayout({ params }:{ params:any }){
    const { id } = params

    const response = await fetch(`http://localhost:3000/api/persons/${id}`, { cache:'default' })
    const person = await response.json()

    return <EditUserPage person={person}/>
}
