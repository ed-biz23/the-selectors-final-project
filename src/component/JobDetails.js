import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function JobDetails(props) {
    const { job } = props;

    return (
        <div key={job.job_id}>
            <Toast>
                <ToastHeader>
                    {job.business_title}
                </ToastHeader>
                <ToastBody>
                    <ul style={{listStyle: 'none'}}>
                        <li>Job Id: {job.job_id}</li>
                        <li>Agency: {job.agency}</li>
                        <li>Job Category: {job.job_category}</li>
                        <li>Job Salary: ${job.salary_range_from} - ${job.salary_range_to}</li>
                        <li>Job Posted On: {job.posting_date}</li>
                    </ul>
                </ToastBody>
            </Toast>
        </div>
    );
}

export default JobDetails;