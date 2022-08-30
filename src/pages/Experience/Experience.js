import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home
