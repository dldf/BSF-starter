const Footer = () => {

    return (
        <div>
            <h2>Footer</h2>
            <p><em> Daniel DeFrance, h48c334</em></p>
            <p>My role in the project was to build the BSF-Starter code for the class:</p>
            <ul>
                <li>client/App.js - root level component</li>
                <li>client/App.css -  basic styling for form and volunteer list </li>
                <li>client/AddEntry.jsx - A react component to collect volunteer data</li>
                <li>client/CurrentEntries.jsx - React compoment listing volunteers to be emailed</li>
                <li>server/index.js - an Express server connecting MySQL with React frontend</li>
            </ul>
            <p>Github: <a href="https://github.com/dldf/BSF-starter">https://github.com/dldf/BSF-starter</a></p>
        </div>
    )
}

export default Footer