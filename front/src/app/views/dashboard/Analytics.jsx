import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'

import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards />                        

                        <StatCards2 />

                        <h4 className="card-title text-muted mb-4">
                            Ongoing Works
                        </h4>
                        <RowCards />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Campaigns />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
