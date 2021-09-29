import React from 'react'
import {
    Card,
    TextField,
    MenuItem,
    IconButton,
    Icon,
    Grid,
} from '@material-ui/core'
import StatCard3 from './shared/StatCard3'
import ComparisonChart2 from './shared/ComparisonChart2'
import StatCard4 from './shared/StatCard4'
import GaugeProgressCard from './shared/GuageProgressCard'
import FollowerCard from './shared/FollowerCard'
import FollowerCard2 from './shared/FollowerCard2'

const Analytics2 = () => {
    return (
        <div className="analytics m-sm-30">           

           
            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <StatCard4 />
                </Grid>
                <Grid item md={4} xs={12}>
                    <GaugeProgressCard />
                </Grid>
                <Grid item md={4} xs={12}>
                    <FollowerCard />
                    <FollowerCard2 />
                </Grid>
            </Grid>
        </div>
    )
}

export default Analytics2
