import { DotSpinner } from "@uiball/loaders"

export const Loader = () => {
    return (
        <div className="container-loader">
            <DotSpinner size={50} speed={0.9} color="black" />
        </div>

    )
}


