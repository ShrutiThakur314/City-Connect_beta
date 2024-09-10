import React from 'react';
import IssueReportingForm from './IssueReportingForm';

const IssueReportingPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Report an Issue</h1>
            <IssueReportingForm />
        </div>
    );
};

export default IssueReportingPage;
