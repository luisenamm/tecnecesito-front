import React from 'react'
import { Grid, Card, Icon, Fab } from '@material-ui/core'

const StatCards2 = () => {
    return (
        <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} md={12}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">                        
                        <Icon className="text-green">lens</Icon>
                        <h5 className="font-medium text-green m-0 ml-3">
                            Active Users
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">10.8k online</h2>                        
                    </div>
                </Card>
            </Grid>
            
        </Grid>
    )
}

export default StatCards2
