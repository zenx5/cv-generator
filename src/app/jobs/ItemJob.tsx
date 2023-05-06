import { Job } from "../tools/types";
import { monthList } from "../tools/constants"

import styles from './ItemJob.module.css'
import Link from "next/link";

export default function ItemJob({ job, plaintext=false }:{ job:Job, plaintext:Boolean }) {

    const formatDate = (date:string) => {
        const year = date.split('-')[0]
        const month = parseInt( date.split('-')[1] )
        return `${monthList[month-1]} ${year}`
    }

    return <div className={ plaintext ? styles.containerOnlyText : styles.container }>
        <h3 className={styles.title}>{job?.position}, {job?.enterprise}. {job?.place && <small className={styles.small}>({job?.place})</small>}</h3>
        <p className={styles.date}>{formatDate(job?.fromDate.slice(0,7))} - {formatDate(job?.toDate.slice(0,7))}</p>
        <div className={styles.goals} dangerouslySetInnerHTML={{__html:job?.goals}}></div>
        { !plaintext && <span className={styles.link}><Link href={`/jobs/${job.id}`}>Editar</Link></span> }
</div>
}