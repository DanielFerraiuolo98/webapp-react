import DefaultLayout from "../layout/DefaultLayout"
import CardComponent from "../components/CardComponent"
export default function HomePage() {
    return (
        <>
            <DefaultLayout />
            <div className="row">
                <CardComponent />
            </div>
        </>
    )
}