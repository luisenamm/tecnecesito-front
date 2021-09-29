import React from 'react'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    return (
        <div>
            <SimpleCard title="Popular jobs">
                <small className="text-muted">Today</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Carpenter (102k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Plumber (40k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Locksmith (80k)"
                />

                <div className="py-3" />
                <small className="text-muted">Yesterday</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Carpenter (102k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Mechanic (40k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Plumber (80k)"
                />                
            </SimpleCard>
        </div>
    )
}

export default Campaigns
