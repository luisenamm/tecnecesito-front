import React from 'react'
import {
    Card,
} from '@material-ui/core'
import JobTables from './shared/JobTable'

const Jobs = () => {
    return (
        <div className="analytics m-sm-30">
            <div className="flex justify-between items-center items-center mb-6">
                <h3 className="m-0">Jobs Available</h3>
            </div>

            <Card className="mt-5 mb-6" elevation={3}>
                <JobTables></JobTables>
            </Card>
        </div>
    )
}
export default Jobs
