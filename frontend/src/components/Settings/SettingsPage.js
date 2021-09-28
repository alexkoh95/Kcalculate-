import React from 'react'
import WeightForm from './WeightForm'
import SideNavBar from '../SideNavBar'
import Settings from '../Settings/Settings'

const SettingsPage = () => {
    return (
        <div>
            <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
                <div className="grid grid-cols-3 space-x-5">
                    <div className="col-span-2">
                        <Settings />
                    </div>
                    

                    <div>
                    <WeightForm />
                    </div>

            </div>
            </main>
        </div>
    )
}

export default SettingsPage
