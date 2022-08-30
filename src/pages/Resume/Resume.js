import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjTwo } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
        </>
    )
}

export default Home
