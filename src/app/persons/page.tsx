import Link from "next/link"

export default async function ListPersonPage(){

    const response = await fetch('http://localhost:3000/api/persons')
    const persons = await response.json()

    return <div>
        <h1>Lista de Usuarios</h1>
        <div style={{boxShadow:'0 0 2px', padding:'2rem', borderRadius:'1rem' }}>
            {
                persons.length===0
                ?
                <div style={{ textAlign:'center', fontStyle:'italic', opacity:0.5, width:'100%' }}>Empty</div>
                :
                persons.map( (person:any) => <span key={person.id}>
                    <h5><Link href={`/persons/${person.id}`}>{person.name}</Link></h5>
                    <small>{person.profetion}</small>
                </span> )}
        </div>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:'2rem'
        }}>
            <Link href='/persons/create'>Crear Usuario</Link>
        </div>
    </div>
}