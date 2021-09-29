import React, { Fragment } from 'react'
import { format } from 'date-fns'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Checkbox,
    Fab,
    Avatar,
    Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    projectName: {
        marginLeft: 24,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 4,
        },
    },
}))

const RowCards = () => {
    const classes = useStyles()

    return [1, 2].map((id) => (
        <Fragment key={id}>
            <Card className="py-2 px-4 project-card">
                <Grid container alignItems="center">
                    <Grid item md={5} xs={7}>
                        <div className="flex items-center">
                            <Checkbox />
                            <Hidden smDown>
                                {id % 2 === 1 ? (
                                    <Fab
                                        className="ml-4 bg-alert box-shadow-none"
                                        size="small"
                                    >
                                        <Icon>sentiment_satisfied</Icon>
                                    </Fab>
                                ) : (
                                    <Fab
                                        className="ml-4 bg-green box-shadow-none text-white"
                                        size="small"
                                    >
                                        <Icon>sentiment_very_satisfied</Icon>
                                    </Fab>
                                )}
                            </Hidden>
                            <span
                                className={clsx(
                                    'font-medium',
                                    classes.projectName
                                )}
                            >
                                Project {id}
                            </span>
                        </div>
                    </Grid>

                    <Grid item md={3} xs={4}>
                        <div className="text-muted">
                            {format(new Date().getTime(), 'MM/dd/yyyy hh:mma')}
                        </div>
                    </Grid>

                    <Hidden smDown>
                        <Grid item xs={3}>
                            <div className="flex relative face-group">
                            {id % 2 === 1 ? (
                                    <Avatar
                                    className="avatar"
                                    src="/assets/images/face-1.jpg"
                                />     
                                ) : (
                                    <Avatar
                                    className="avatar"
                                    src="/assets/images/face-3.jpg"
                                />     
                                )}
                                                           
                            </div>
                        </Grid>
                    </Hidden>                  
                </Grid>
            </Card>
            <div className="py-2" />
        </Fragment>
    ))
}

export default RowCards
