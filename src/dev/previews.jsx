import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SubNav from "../components/SubNav.jsx";
import App from "../App.jsx";
import ThisCity from "../components/ThisCity.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SubNav">
                <SubNav/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/ThisCity">
                <ThisCity/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews