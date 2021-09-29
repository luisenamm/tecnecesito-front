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
    MenuItem,
    Select,
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

const TopSellingTable = () => {
    const classes = useStyles()

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Jobs requested</span>
                <Select size="small" defaultValue="1" disableUnderline>
                    <MenuItem value="1">Today</MenuItem>
                    <MenuItem value="2">Last Week</MenuItem>
                    <MenuItem value="3">Last Month</MenuItem> 
                </Select>
            </div>
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
                                Revenue
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
                                    $
                                    {client.price > 999
                                        ? (client.price / 1000).toFixed(1) +
                                          'k'
                                        : client.price}
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
        price: 500,
        grade: 4.9,
    },
    {
        imgUrl: '/assets/images/face-2.jpg',
        name: 'Juan López',
        job:'Mechanic',
        price: 1500,
        grade: 4.8,
    },
    {
        imgUrl: '/assets/images/face-4.jpg',
        name: 'Erika Mercado',
        job:'Baker',
        price: 600,
        grade: 4.9,
    },
    {
        imgUrl: '/assets/images/face-5.jpg',
        name: 'Julieta Vázquez',
        job:'Chef',
        price: 2500,
        grade: 4.6,
    },
    {
        imgUrl: '/assets/images/face-1.png',
        name: 'Gerardo Guzmán',
        job:'Locksmith',
        price: 400,
        grade: 4.7,
    },
]

export default TopSellingTable
