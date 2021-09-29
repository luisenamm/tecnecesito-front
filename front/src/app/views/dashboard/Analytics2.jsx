import React from 'react'
import {
    Card,
    TextField,
    MenuItem,
    IconButton,
    Icon,
    Grid,
} from '@material-ui/core'
import TopSellingTable from './shared/TopSellingTable'


const Analytics2 = () => {
    return (
        <div className="analytics m-sm-30">
            <div className="flex justify-between items-center items-center mb-6">
                <h3 className="m-0">History</h3>
            </div>

            <Card className="mt-5 mb-6" elevation={3}>
                <TopSellingTable></TopSellingTable>
            </Card>
        </div>
    )
}
export default Analytics2
