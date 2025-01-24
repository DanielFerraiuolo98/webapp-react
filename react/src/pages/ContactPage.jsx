import DefaultLayout from "../layout/DefaultLayout"
export default function ContactPage() {
    return (
        <>
            <DefaultLayout />
            <h1>Mettiti in contatto con noi!</h1>
            <div>
                <h2>Team Mail Contact</h2>
                <ul>
                    <li>Michele Saraceni <a href="">michele@saraceni.it</a> </li>
                    <li>Daniel Ferraiuolo <a href="">daniel@ferraiuolo.it</a> </li>
                    <li>Francesco Cialfi <a href="">francesco@cialfi.it</a> </li>
                    <li>Andrea Giancristiani <a href="">andrea@giancristiani.it</a> </li>
                    <li>Carlo Dettori <a href="">carlo@dettori.it</a> </li>
                </ul>
            </div>
        </>
    )
}