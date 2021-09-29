import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const StatCards = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>group</Icon>
                        <div className="ml-3">
                            <small className="text-muted">Contacts</small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                13
                            </h6>
                        </div>
                    </div>                    
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between align-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>attach_money</Icon>
                        <div className="ml-3">
                            <small className="text-muted line-height-1">
                                Spent this wek
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                $850
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>store</Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                Most requested service
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                Carpenter
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>shopping_cart</Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                Pending jobs
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                2
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards
