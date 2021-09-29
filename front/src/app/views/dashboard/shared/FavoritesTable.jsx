import React from 'react'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const FavTables = () => {
    const classes = useStyles()

    return (
        <Card elevation={3} className="pt-5 mb-6">            
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="px-6" colSpan={4}>
                                Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Job
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Times requested
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Grade
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map((client, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={4}
                                    align="left"
                                >
                                    <div className="flex items-center">
                                        <Avatar src={client.imgUrl} />
                                        <p className="m-0 ml-8">
                                            {client.name}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={2}
                                    align="left"
                                >
                                    <div className="flex items-center">                                    
                                        <p className="m-0 ">
                                            {client.job}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    {client.times}
                                </TableCell>  
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={4}
                                    align="left"
                                >
                                    <div className="flex items-center">                                    
                                        <p className="m-0 ">
                                            {client.grade}
                                        </p>
                                    </div>
                                </TableCell>                        
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}

const clients = [
    {
        imgUrl: '/assets/images/face-1.jpg',
        name: 'David García',
        job:'Carpenter',
        times: 5,
        grade: 4.9,
    },
    {
        imgUrl: '/assets/images/face-4.jpg',
        name: 'Erika Mercado',
        job:'Baker',
        times: 10,
        grade: 4.9,
    },
    {
        imgUrl: '/assets/images/face-3.png',
        name: 'Miguel Hernández',
        job:'Blacksmith',
        times: 2,
        grade: 4.6,
    },
]

export default FavTables
