import React from "react"
import {Fragment} from "react"
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"
import SubNav from "../components/SubNav.jsx";

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
            <Component name="SubNav">
                <Variant>
                    <SubNav/>
                </Variant>
            </Component>
        </Category>
    </Palette>
)

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    )
}