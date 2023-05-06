import FormJob from "./FormJob";
import ItemJob from "./ItemJob";


export default async function JobsPage() {

    const response = await fetch('http://localhost:3000/api/jobs', { next: { revalidate:30 } })
    const jobs = await response.json()

    return <div>
        <FormJob />
        <div>
        { jobs.map( (job:any) => <ItemJob key={job.id} job={job} plaintext={false} />)}
        </div>
    </div>
}