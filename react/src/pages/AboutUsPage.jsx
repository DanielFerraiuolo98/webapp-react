import DefaultLayout from "../layout/DefaultLayout"
export default function AboutUsPage() {
    return (
        <>
            <DefaultLayout />
            <h1>Chi Siamo</h1>
            <div>
                <h2>Team</h2>
                <ul>
                    <li>Michele Saraceni</li>
                    <li>Daniel Ferraiuolo</li>
                    <li>Francesco Cialfi</li>
                    <li>Andrea Giancristiani</li>
                    <li>Carlo Dettori</li>
                </ul>
            </div>
            <div>
                <h2>Business</h2>
                <p>Siamo una piccola Start Italiana dedicata allo sviluppo softer tra applicazioni, siti web e webapp</p>
            </div >

            <div>
                <h2>Collaborazioni</h2>
                <p>Collaboriamo con altre aziende italiane</p>
            </div>
        </>
    )
}