import React from 'react';
import SideNavBar from "../SideNavBar";
import WeightForm from './WeightForm';

const Settings = () => {
    return (
        <div>
              <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
            <h1>this is Settings Page</h1>

                <div className="grid grid-cols-3">
                    <div>
                        Username change

                    </div>

                    <div>
                        calories change</div>
                    
                    <div>
                        <WeightForm /></div>

                </div>
            </main>
        </div>
    )
}

export default Settings
